import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AccountGuard = ({ children }) => {
  const account = useSelector((state) => state.account);
  const { hasAccount } = account;

  if (!hasAccount) {
    return <Redirect to="/account/create" />;
  }

  return children;
};

AccountGuard.propTypes = {
  children: PropTypes.node
};

export default AccountGuard;
