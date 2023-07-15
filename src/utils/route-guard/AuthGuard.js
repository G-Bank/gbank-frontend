import PropTypes from 'prop-types';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';

const AuthGuard = ({ children }) => {
//   const account = useSelector((state) => state.account);
//   const { isLoggedIn } = true;

//   if (!isLoggedIn) {
//     return <Redirect to="/auth/login" />;
//   }

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
