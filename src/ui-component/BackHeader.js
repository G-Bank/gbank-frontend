import { Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

const BackHeader = ({ title }) => {
  const history = useHistory();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography style={{ marginRight: 'auto' }}>{title}</Typography>
      <ArrowBack style={{ marginRight: 'auto' }} onClick={() => history.goBack()} />
    </Box>
  );
};

export default BackHeader;
