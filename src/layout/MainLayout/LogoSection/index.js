import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from './../../../config';
import Logo from './../../../ui-component/Logo';
import { strings } from '../../../localizedString';

//-----------------------|| MAIN LOGO ||-----------------------//

const LogoSection = () => {
  return (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
      <Logo /> <h2>{strings?.name}</h2>
    </ButtonBase>
  );
};

export default LogoSection;
