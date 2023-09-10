import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MainCard = ({ title, children }) => {
  return (
    <Box my={2} width='100%'>
      <Typography variant='h4'>{title}</Typography>
      <Box mt={1} p={2} borderRadius={4} width='100%' bgcolor='white'>
        {children}
      </Box>
    </Box>
  )
}

MainCard.propTypes = {
  title: PropTypes.string,
};

export default MainCard;
