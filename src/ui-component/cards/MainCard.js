import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MainCard = ({ title, titleButton, children }) => {
  return (
    <Box my={2} width="100%">
      <Box display='flex' alignItems='center' gap={1}>
        <Typography variant="h4">{title}</Typography>
        {titleButton}
      </Box>
      {children && (
        <Box mt={1} p={2} borderRadius={4} width="100%" bgcolor="white">
          {children}
        </Box>
      )}
    </Box>
  );
};

MainCard.propTypes = {
  title: PropTypes.string,
  titleButton: PropTypes.node,
  children: PropTypes.node,
};

export default MainCard;
