import { Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

const BackHeader = ({ title, onClick }) => {
  const history = useHistory();

  const handleClick = (e) => {
    if (typeof onClick === 'function') {
      onClick(e);
    } else {
      history.goBack();
    }
  }
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography style={{ marginRight: 'auto' }}>{title}</Typography>
      <ArrowBack style={{ marginRight: 'auto' }} onClick={handleClick} />
    </Box>
  );
};

export default BackHeader;
