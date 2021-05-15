import React, {FunctionComponent, useState} from "react";
import GlobalStyle from "./styles/Global";
import Navbar from "./pages/Navbar/Navbar";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {LandingPage} from "./pages/landingpage/LandingPage";
import {AuthProvider} from './context/auth';
import {AuthRouter} from "./pages/auth/Auth.router";

const App: FunctionComponent = () =>
    <BrowserRouter>
        <AuthProvider>
            <div>
                <GlobalStyle/>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/auth" component={AuthRouter}/>
                </Switch>
            </div>
        </AuthProvider>
    </BrowserRouter>
export default App;
