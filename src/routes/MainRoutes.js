import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';
import AccountGuard from '../utils/route-guard/AccountGuard';
import TransferRoutes from './TransferRoutes';

// sample page routing
const HomePage = Loadable(lazy(() => import('../views/home')));
const ProfilePage = Loadable(lazy(() => import('../views/pages/profile')));

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/dashboard', '/profile', '/transfer']}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <AccountGuard>
              <Route path="/dashboard" component={HomePage} />
              <Route path="/profile" component={ProfilePage} />
              <TransferRoutes />
            </AccountGuard>
          </AuthGuard>
        </Switch>
        <div style={{ margin: '5em' }} />
      </MainLayout>
    </Route>
  );
};

export default MainRoutes;
