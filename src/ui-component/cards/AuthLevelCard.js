import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

function AuthLevelCard({ level, limits, link, authLink }) {
  return (
    <>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Box
          width="calc(100% + 32px)"
          m={-2}
          mb={1}
          borderRadius="16px 16px 0 0"
          textAlign="center"
          p={1}
          bgcolor={authLink ? '#7E7E7E' : '#28A745'}
        >
          <Typography color="white">{level}</Typography>
        </Box>
      </Link>
      <Box>
        <Typography mb={2}>{limits?.withdraw}</Typography>
        <Typography>{limits?.deposit}</Typography>
      </Box>
      {authLink && (
        <Link to={authLink} style={{ textDecoration: 'none' }}>
          <Box width="calc(100% + 32px)" m={-2} mt={1} borderRadius="0 0 16px 16px" textAlign="center" p={1} bgcolor="#0077DB">
            <Typography color="white">{level}</Typography>
          </Box>
        </Link>
      )}
    </>
  );
}

export default AuthLevelCard;
