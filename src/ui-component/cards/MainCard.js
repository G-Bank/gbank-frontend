import PropTypes from 'prop-types';

import { Box, Typography } from '@mui/material';

const MainCard = ({ title, titleButton, bgcolor, children }) => {
  return (
    <Box my={2} width="100%">
      <Box display='flex' alignItems='center' gap={1}>
        <Typography variant="h4">{title}</Typography>
        {titleButton}
      </Box>
      {children && (
        <Box mt={1} p={2} borderRadius={4} width="100%" bgcolor={bgcolor}>
          {children}
        </Box>
      )}
    </Box>
  );
};

MainCard.propTypes = {
  title: PropTypes.string,
  titleButton: PropTypes.node,
  bgcolor: PropTypes.string,
  children: PropTypes.node,
};

MainCard.defaultProps = {
  bgcolor: 'white',
};

export default MainCard;
