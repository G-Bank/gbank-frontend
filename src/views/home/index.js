import React from 'react';
// project imports
import MainCard from '../../ui-component/cards/MainCard';
import { Button, Card, CardContent, Grid } from '@mui/material';
import { strings } from '../../localizedString';
import Wallet from './Wallet';

const HomePage = () => {
  return (
    <MainCard title={strings.wallet}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={4} md={3}>
              {strings.valueInventory}
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              {strings.availableInventory}
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              {strings.inOrder}
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Grid container>
                <Grid item md={6}>
                  <Button>{strings.transfer}</Button>
                </Grid>
                <Grid item md={6}>
                  <Button>{strings.convert}</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Wallet />
        </CardContent>
      </Card>
    </MainCard>
  );
};

export default HomePage;
