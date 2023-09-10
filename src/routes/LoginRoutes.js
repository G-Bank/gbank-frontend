import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import GuestGuard from './../utils/route-guard/GuestGuard';
import NavMotion from './../layout/NavMotion';
import Loadable from '../ui-component/Loadable';

// login routing
const AuthLogin = Loadable(lazy(() => import('../views/pages/authentication/login')));

const LoginRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/auth/login']}>
      <Switch location={location} key={location.pathname}>
        <NavMotion>
          <GuestGuard>
            <Route path="/auth/login" component={AuthLogin} />
          </GuestGuard>
        </NavMotion>
      </Switch>
    </Route>
  );
};

export default LoginRoutes;
