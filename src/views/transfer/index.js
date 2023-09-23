import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { strings } from '../../localizedString';
import { ArrowBack } from '@mui/icons-material';

const Receiver = ({ children }) => {
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item mr='auto'>
          <Typography>{strings?.transfer}</Typography>
        </Grid>
        <Grid item mr='auto'>
          <ArrowBack />
        </Grid>
      </Grid>
      {children}
    </Box>
  );
};

export default Receiver;
