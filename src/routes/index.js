import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import config from './../config';


const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to={config.defaultPath} />
            <React.Fragment>
                <LoginRoutes />
                <MainRoutes />
            </React.Fragment>
        </Switch>
    );
};

export default Routes;
