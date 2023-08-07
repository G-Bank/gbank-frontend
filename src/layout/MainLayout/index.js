import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { AppBar, CssBaseline, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// third-party
import clsx from 'clsx';

// project imports
import Header from './Header';
import Sidebar from './Sidebar';
import { drawerWidth } from '../../store/constant';
import { SET_MENU } from './../../store/actions';
import FloadingMenu from './FloatingMenu';

// style constant
const useStyles = (dir) =>
  makeStyles((theme) => ({
    root: {
      display: 'flex',
      right: dir ? 0 : ''
    },
    appBar: {
      backgroundColor: theme.palette.background.default
    },
    appBarWidth: {
      transition: theme.transitions.create('width'),
      backgroundColor: theme.palette.background.default
    },
    content: {
      ...theme.typography.mainContent,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: dir ? -(drawerWidth - 20) : '',
        marginRight: !dir ? -(drawerWidth - 20) : '',
        width: `calc(100% - ${drawerWidth}px)`
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: dir ? '20px' : '',
        marginRight: !dir ? '20px' : '',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
        marginRight: '10px'
      }
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: dir ? '0' : '',
      marginRight: !dir ? '0' : '',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      [theme.breakpoints.down('md')]: {
        marginLeft: dir ? '20px' : '',
        marginRight: !dir ? '20px' : ''
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: dir ? '10px' : '',
        marginRight: !dir ? '10px' : ''
      }
    }
  }));

//-----------------------|| MAIN LAYOUT ||-----------------------//

const MainLayout = ({ children }) => {
  const { direction } = useSelector((state) => state.customization);

  const theme = useTheme();
  const classes = useStyles(direction === 'ltr')();

  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  React.useEffect(() => {
    dispatch({ type: SET_MENU, opened: !matchDownMd });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        className={leftDrawerOpened ? classes.appBarWidth : classes.appBar}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* main content */}
      <main
        className={clsx([
          classes.content,
          {
            [classes.contentShift]: leftDrawerOpened
          }
        ])}
      >
        {/* <Main open={leftDrawerOpened}> */}
        <div>{children}</div>
        {/* </Main> */}
      </main>
      <FloadingMenu />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
