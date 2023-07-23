import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MinimalLayout from '../layout/MinimalLayout';
import NavMotion from '../layout/NavMotion';
import Loadable from '../ui-component/Loadable';
import AuthGuard from '../utils/route-guard/AuthGuard';

// login routing
const CreateAccountPage = Loadable(lazy(() => import('../views/pages/account/create')));

const AccountRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/account/create']}>
      <MinimalLayout>
        <Switch location={location} key={location.pathname}>
          <NavMotion>
            <AuthGuard>
              <Route path="/account/create" component={CreateAccountPage} />
            </AuthGuard>
          </NavMotion>
        </Switch>
      </MinimalLayout>
    </Route>
  );
};

export default AccountRoutes;
