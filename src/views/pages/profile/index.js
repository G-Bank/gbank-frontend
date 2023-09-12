import { Box } from '@mui/material';
import BackHeader from '../../../ui-component/BackHeader';
import { strings } from '../../../localizedString';

const ProfilePage = () => {
  return (
    <Box>
      <BackHeader title={strings?.profile} />
    </Box>
  );
};

export default ProfilePage;
