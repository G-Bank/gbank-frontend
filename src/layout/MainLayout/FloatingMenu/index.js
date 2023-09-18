// material-ui
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

import homeIcon from '../../../assets/images/icons/home.svg';
import transferIcon from '../../../assets/images/icons/transfer.svg';
import servicesIcon from '../../../assets/images/icons/services.svg';

import { strings } from '../../../localizedString';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingTop: 6,
    boxShadow: '0px 2px 2px 0px rgba(54, 54, 54, 0.15)',
  }
}));

const FloatingMenu = () => {
  const styles = useStyles();

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        top: 'auto',
        bottom: 15,
        right: '50%',
        transform: 'translateX(50%)',
        boxShadow: 'none',
        borderRadius: '40em',
        width: '90%',
        maxWidth: 400,
      }}
    >
      <Toolbar>
        <Grid container className={styles.container}>
          {[
            { name: strings?.allServices, Icon: <img alt='transfer' src={servicesIcon} />, link: '' },
            { name: strings?.transfer, Icon: <img alt='transfer' src={transferIcon} />, link: '/transfer' },
            { name: strings?.home, Icon: <img alt='home' src={homeIcon} />, link: '/dashboard' },
          ].map(item => (
            <Grid container key={item.name} item xs={4} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
              <Grid item display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                {item.Icon}
                <Typography m='3px' variant='subtitle2'>{item.name}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default FloatingMenu;
