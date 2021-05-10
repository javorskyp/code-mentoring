const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
var morgan = require("morgan");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(cors());
// app.use(morgan('combined'));

// Passport Config

require("./config/passport")(passport);

//Connect DB
connectDB();

// Express body parser
app.use(express.json({ extended: false }));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("/api", (req, res) => {
  res.json({ msg: "hello from api server" });
});
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/profile", require("./routes/profile"));
app.use("/posts", require("./routes/posts"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is listening on port: ${port}`));
