import React from 'react';

// material-ui
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';

// project imports
import AccountWrapper from '../AccountWrapper';
import AccountCardWrapper from '../AccountCardWrapper';
import { strings } from '../../../../localizedString';
import RestAccount from './RestAccount';


// todo
// select the account type
const CreateAccountPage = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AccountWrapper>
      <Grid container direction="column" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AccountCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}></Grid>
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            {strings?.accountWelcome}
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : ''}>
                            {strings?.accountMessage}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <RestAccount />
                  </Grid>
                </Grid>
              </AccountCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AccountWrapper>
  );
};

export default CreateAccountPage;
