import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

// project imports

const MinimalLayout = (props) => {
  return (
    <Box width="100vw" height="100vh" bgcolor="#e7e7e7">
      {props.children}
    </Box>
  );
};

MinimalLayout.propTypes = {
  children: PropTypes.node
};

export default MinimalLayout;
