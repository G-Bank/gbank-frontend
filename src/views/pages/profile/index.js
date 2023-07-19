import { strings } from '../../../localizedString';
import MainCard from '../../../ui-component/cards/MainCard';
import RestProfile from './RestProfile';

const ProfilePage = () => {
  return (
    <MainCard title={strings?.profile}>
      <RestProfile />
    </MainCard>
  );
};

export default ProfilePage;
