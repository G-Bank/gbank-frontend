import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import { strings } from '../../localizedString';
import { icons, images } from '../../assets/images';

function LandingPage() {

  return (
    <Box width="100%">
      <Box mb={3}>
        <Grid container>
          <Grid item display="flex" alignItems="center" xs={5} md={3}>
            <img src={icons.appIcon} alt="flexin" />
            <Typography variant="h3">{strings?.name}</Typography>
          </Grid>
          <Grid item display="flex" justifyContent='flex-end' alignItems="center" gap={1} xs={7} md={4}>
            <Button variant="outlined" color="primary">
              {strings?.signIn}
            </Button>
            <Button variant="contained" color="primary">
              {strings?.signUp}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box display='flex' flexDirection='column' gap={2}>
            <Typography variant='h2'>{strings?.landingTitle}</Typography>
            <Typography variant='subtitle1'>{strings?.landingSubtitle}</Typography>
            <Typography variant='body2'>{strings?.signUpBanner}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={images.appBanner} width='100%' alt='app banner' />
        </Grid>
      </Grid>
      <Box></Box>
      <Box></Box>
    </Box>
  );
}

export default LandingPage;
