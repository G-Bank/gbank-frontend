// material-ui
import { AppBar, Fab, Grid, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import TransformIcon from '@mui/icons-material/Transform';
import HomeIcon from '@mui/icons-material/Home';
import FingerprintIcon from '@mui/icons-material/Fingerprint';


import { strings } from '../../../localizedString';


const FloadingMenu = () => {
  function isActive(addr, index) {
    return addr === window.location.hash.replace('#', '');
  }
  const StyledFab = styled(Fab)({
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto'
  });
  // todo
  // add link to FAB
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        top: 'auto',
        bottom: 15,
        right: '5%',
        display: { sm: 'none', xs: 'block' },
        boxShadow: 'none',
        borderRadius: '40em',
        width: '90%'
      }}
    >
      <Toolbar>
        <Grid container>
          {[
            { name: strings?.transfer, Icon: <TransformIcon />, link: '/transfer' },
            { name: strings?.home, Icon: <HomeIcon />, link: '/dashboard' },
            { name: strings?.bio, Icon: <FingerprintIcon />, link: '/auth' }
          ].map((item, index) => (
            <Grid container key={index} item xs={4} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
              <Grid item>
                <StyledFab size="medium" color={isActive(item.link, index) ? 'info' : 'inherit'} aria-label="add">
                  {item.Icon}
                </StyledFab>
              </Grid>
              {/* <Grid item>
                <small>{item.name}</small>
              </Grid> */}
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default FloadingMenu;
