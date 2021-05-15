import React, {FunctionComponent} from 'react';
import {Redirect, Route, Switch, match} from 'react-router-dom';
import {Register} from './views/Register/Register';
import {Login} from './views/Login/Login';

export const AuthRouter: FunctionComponent<{ match: match }> = ({match}) => (
    <Switch>
        <Route path={`${match.path}/login`} component={Login}/>
        <Route path={`${match.path}/register`} component={Register}/>
        <Redirect to={`${match.path}/login`}/>
    </Switch>
)



