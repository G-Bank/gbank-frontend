import React from 'react';

// material ui
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import { strings } from '../../localizedString';
import Crypto from './Crypto';
import Rial from './Rial';
import Convert from './Convert';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const HomePage = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="inherit"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label={strings?.crypto} {...a11yProps(0)} />
          <Tab label={strings?.rial} {...a11yProps(1)} />
          <Tab label={strings?.convert} {...a11yProps(2)} disabled/>
        </Tabs>
      </AppBar>
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Crypto />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Rial />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Convert />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default HomePage;
