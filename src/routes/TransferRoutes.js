import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

import Loadable from '../ui-component/Loadable';

const ReceiverPage = Loadable(lazy(() => import('../views/transfer/Receiver')));
const Transfer = Loadable(lazy(() => import('../views/transfer')));
const AmountPage = Loadable(lazy(() => import('../views/transfer/Amount')));
const ConfirmationPage = Loadable(lazy(() => import('../views/transfer/Confirmation')));
const ResultPage = Loadable(lazy(() => import('../views/transfer/Result')));

const TransferRoutes = () => (
  <Transfer>
    <Route path="/transfer/receiver" component={ReceiverPage} />
    <Route path="/transfer/amount" component={AmountPage} />
    <Route path="/transfer/confirm" component={ConfirmationPage} />
    <Route path="/transfer/Result" component={ResultPage} />
  </Transfer>
);

export default TransferRoutes;