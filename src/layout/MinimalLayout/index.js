import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

// project imports

const MinimalLayout = (props) => {
  return (
    <Box mx='auto' width="100%" height="100%" maxWidth={440} bgcolor="#e7e7e7" padding={2}>
      {props.children}
      <Box width='100%' height='5em' />
    </Box>
  );
};

MinimalLayout.propTypes = {
  children: PropTypes.node
};

export default MinimalLayout;
