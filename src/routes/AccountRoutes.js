import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import NavMotion from '../layout/NavMotion';
import Loadable from '../ui-component/Loadable';
import AuthGuard from '../utils/route-guard/AuthGuard';

// login routing
const CreateAccountPage = Loadable(lazy(() => import('../views/pages/account/create')));

const AccountRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/account/create']}>
      <Switch location={location} key={location.pathname}>
        <NavMotion>
          <AuthGuard>
            <Route path="/account/create" component={CreateAccountPage} />
          </AuthGuard>
        </NavMotion>
      </Switch>
    </Route>
  );
};

export default AccountRoutes;
