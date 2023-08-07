// material-ui
import { Avatar, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

import tether from '../../../assets/images/icons/tether.svg';
import { strings } from '../../../localizedString';

const Crypto = ({ wallet }) => {
  return (
    <Card>
      <CardContent sx={{ padding: { xs: 0, sm: 0, md: 2 } }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {strings?.balanceUSDT}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" component="div">
              {wallet}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {strings?.available}
            </Typography>
          </Grid>
          <Grid item xs={6} container justifyContent={'flex-end'}>
            <Avatar alt="Tether" src={tether} sx={{ width: 'auto', height: { sm: '100%', xs: 50 } }} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ padding: { xs: 0, sm: 0, md: 2 }, mt: 2 }}>
        <Button variant="contained" color="primary" sx={{ m: { xs: '0.2em', sm: '0.5em', md: 1 } }}>
          {strings?.transfer}
        </Button>
        <Button variant="contained" color="primary" sx={{ m: { xs: '0.2em', sm: '0.5em', md: 1 } }}>
          {strings?.charge}
        </Button>
        <Button variant="contained" color="primary" sx={{ m: { xs: '0.2em', sm: '0.5em', md: 1 } }} disabled>
          {strings?.convert}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Crypto;
