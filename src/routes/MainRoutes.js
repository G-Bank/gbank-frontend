import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';

// sample page routing
const HomePage = Loadable(lazy(() => import('../views/home')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/dashboard']}>
      <MainLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <Route path="/dashboard" component={HomePage} />
          </AuthGuard>
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default MainRoutes;