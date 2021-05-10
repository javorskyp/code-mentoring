const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const { check, validationResult } = require('express-validator');

const Post = require('../models/Post');

// @route    POST /posts
// @desc     Create post
// @acess    Private
router.post(
  '/',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(500).json({ errors: errors.array() });
    try {
      const post = new Post({
        text: req.body.text,
        name:
          req.user.name ||
          req.user.google.name ||
          req.user.github.name ||
          req.user.facebook.name ||
          req.user.email,
        avatar: req.user.google.photo || req.user.github.photo,
        user: req.user.id
      });
      await post.save();
      return res.json(post);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET /posts
// @desc     Get all posts
// @acess    Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    return res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET /posts/:id
// @desc     Get post by id
// @acess    Private
router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    return res.json(post);
  } catch (error) {
    if (error.kind === 'ObjectId')
      return res.status(404).json({ msg: 'Post not found' });
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/posts/:id
// @desc     Delete post by id
// @acess    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    if (post.user.toString() !== req.user.id)
      return res.status(403).json({ msg: 'Not authorized' });
    await post.remove();
    return res.json({ msg: 'Post removed' });
  } catch (error) {
    if (error.kind === 'ObjectId')
      return res.status(404).json({ msg: 'Post not found' });
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT /posts/like/:id
// @desc     Like a post
// @acess    Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //Check if the post has been liked by this user already
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    )
      return res.status(400).json({ msg: 'Post already liked' });
    // Add like to post
    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT /posts/unlike/:id
// @desc     Unlike a post
// @acess    Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    //Check if the post has been liked by this user
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    )
      return res.status(400).json({ msg: 'Post has not yet been liked' });

    // Unlike post
    post = await Post.findOneAndUpdate(
      { _id: post.id },
      { $pull: { likes: { user: req.user.id } } },
      { new: true }
    );
    await post.save();
    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST /posts/comment/:id
// @desc     Create comment on a post
// @acess    Private
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(500).json({ errors: errors.array() });
    try {
      // const user = await User.findById(req.user.id).select('-password');
      const post = await Post.findById(req.params.id);

      const comment = {
        text: req.body.text,
        name:
          req.user.name ||
          req.user.google.name ||
          req.user.github.name ||
          req.user.facebook.name ||
          req.user.email,
        avatar: req.user.google.photo || req.user.github.photo,
        user: req.user.id
      };
      post.comments.unshift(comment);
      await post.save();
      return res.json(post.comments);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE /posts/comment/:id/:comment_id
// @desc     Delete comment from a post
// @acess    Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    //Find comment to delete
    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );
    if (!comment)
      return res.status(404).json({ msg: 'Comment does not exists' });

    //Check user
    if (comment.user.toString() !== req.user.id)
      return res.status(403).json({ msg: 'User not authorized' });

    //Delte comment
    post = await Post.findOneAndUpdate(
      { _id: post.id },
      {
        $pull: { comments: { _id: req.params.comment_id, user: req.user.id } }
      },
      { new: true }
    );
    await post.save();
    res.json(post.comments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
