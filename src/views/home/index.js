import React from 'react';
// project imports
import MainCard from '../../ui-component/cards/MainCard';
import { Box, Card, CardContent, Tab } from '@mui/material';
import { strings } from '../../localizedString';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Crypto from './Crypto';

const HomePage = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainCard title={strings?.dashboard}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs">
            <Tab label={strings?.crypto} value="1" />
            <Tab label={strings?.rial} value="2" />
            <Tab label={strings?.convert} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Crypto />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
      <Card>
        <CardContent></CardContent>
      </Card>
    </MainCard>
  );
};

export default HomePage;
