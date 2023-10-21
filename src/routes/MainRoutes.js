import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import Loadable from '../ui-component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';
import AccountGuard from '../utils/route-guard/AccountGuard';
import MinimalLayout from '../layout/MinimalLayout';

// sample page routing
const HomePage = Loadable(lazy(() => import('../views/home')));
const ProfilePage = Loadable(lazy(() => import('../views/pages/profile')));
const AuthLevelPage = Loadable(lazy(() => import('../views/authLevel')));
const AuthPage = Loadable(lazy(() => import('../views/pages/profile/ProfileAuthentication')));
const EditProfilePage = Loadable(lazy(() => import('../views/pages/profile/EditProfile')));
const DepositPage = Loadable(lazy(() => import('../views/deposit')))
const ExchangePage = Loadable(lazy(() => import('../views/exchange')));
const TransferPage = Loadable(lazy(() => import('../views/transfer')));
const PaymentRequestPage = Loadable(lazy(() => import('../views/paymentRequest')));

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Route path={['/dashboard', '/profile', '/auth-level','/authentication', '/edit', '/deposit', '/transfer', '/exchange', '/payment-request']}>
      <MinimalLayout>
        <Switch location={location} key={location.pathname}>
          <AuthGuard>
            <AccountGuard>
              <Route path="/dashboard" component={HomePage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/edit" component={EditProfilePage} />
              <Route path="/deposit" component={DepositPage} />
              <Route path="/auth-level" component={AuthLevelPage} />
              <Route path="/authentication" component={AuthPage} />
              <Route path="/exchange" component={ExchangePage} />
              <Route path="/transfer" component={TransferPage} />
              <Route path="/payment-request" component={PaymentRequestPage} />
            </AccountGuard>
          </AuthGuard>
        </Switch>
      </MinimalLayout>
    </Route>
  );
};

export default MainRoutes;
