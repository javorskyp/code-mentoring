import React, { FunctionComponent, useState, useContext, ChangeEvent, FormEvent } from "react";
import { Avatar, ActionButton } from "src/components/elements";
import { AuthContext } from "src/context/auth";
import { BasicAuthData } from "src/context/auth/types";
import { Wrapper, Container, SocialMedia, StyledForm, GithubIcon, FacebookIcon, GoogleIcon } from '../../components';




export const Login: FunctionComponent = () => {
    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState<BasicAuthData>({
        email: "",
        password: ""
    });
    const { email, password } = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [event.target.name]: event.target.value });

    const onLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login(formData);
    };
    return (
        <Wrapper>
            <Container>
                <Avatar />
                <form onSubmit={onLoginSubmit}>
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
                        <ActionButton type="submit" name="Zaloguj" />
                    </StyledForm>
                </form>
                <a href="a"><p>Zapomniałeś hasła?</p></a>
                <p>lub zaloguj się za pomocą</p>
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
