import React, { FunctionComponent, useState, useContext } from 'react';
import { GithubIcon, GoogleIcon, FacebookIcon, Wrapper, SocialMedia, Container, StyledForm } from "../../components";
import { AuthContext } from "src/context/auth";
import { Avatar, ActionButton } from 'src/components/elements';

export const Register: FunctionComponent = () => {
    const { register } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const { email, password } = formData;
    const onChange = (e: React.FormEvent<HTMLInputElement>) =>
        setFormData({
            ...formData,
            [e.currentTarget.name]: [e.currentTarget.value]
        }
        );

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(formData);
    };

    return (
        <Wrapper>
            <Container>
                <Avatar />
                <form onSubmit={e => onSubmit(e)}>
                    <StyledForm>
                        <input
                            className="textfield"
                            type="email"
                            placeholder="Email address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                        />
                        <input
                            className="textfield"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                        />
                        <ActionButton type="submit" name={"Register"} />
                    </StyledForm>
                </form>

                <p>message form the register verification</p>
                <p>or Sign Up with</p>
                <SocialMedia>
                    <div>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/auth/facebook`}>
                            <FacebookIcon />
                        </a>
                    </div>
                    <div>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}>
                            <GoogleIcon />
                        </a>
                    </div>
                    <div>
                        <a href={`${process.env.REACT_APP_SERVER_URL}/auth/github`}>
                            <GithubIcon />
                        </a>
                    </div>
                </SocialMedia>
            </Container>
        </Wrapper>
    );
};