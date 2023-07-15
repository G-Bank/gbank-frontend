import React from 'react';

// material-ui
import { Skeleton } from '@mui/material';

//-----------------------|| SKELETON IMAGE CARD ||-----------------------//

const ImagePlaceholder = ({ ...others }) => {
  return <Skeleton variant="rect" {...others} animation="wave" />;
};

export default ImagePlaceholder;
