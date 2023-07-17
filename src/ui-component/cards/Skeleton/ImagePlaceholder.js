import React from 'react';

// material-ui
import { Skeleton } from '@mui/material';


const ImagePlaceholder = ({ ...others }) => {
  return <Skeleton variant="rect" {...others} animation="wave" />;
};

export default ImagePlaceholder;
