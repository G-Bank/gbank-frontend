import { useEffect, useMemo, useState } from 'react';

import { Box, Typography } from '@mui/material';

import BackHeader from '../../ui-component/BackHeader';
import { strings } from '../../localizedString';
import MainCard from '../../ui-component/cards/MainCard';
import Loader from '../../ui-component/Loader';
import AuthLevelCard from '../../ui-component/cards/AuthLevelCard';
import { getMaxLimits, getUserProfile, getUserTiers } from '../../api/user';
import { useSelector } from 'react-redux';

const AuthLevelPage = () => {
  const [loading, setLoading] = useState(false);
  const [maxLimits, setMaxLimits] = useState('');

  const { user, accountId, authLevels } = useSelector((state) => state.account);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);

      await getUserTiers();
      await getUserProfile();

      const limits = await getMaxLimits(accountId, 'irr');
      setMaxLimits(limits);

      setLoading(false);
    };
    fetchUserData();
  }, [accountId]);

  const currentLevel = useMemo(
    () => Object.entries(authLevels).find(([key]) => key === String(user.auth_level))?.[1],
    [authLevels, user.auth_level]
  );

  const nextLevel = useMemo(
    () => Object.entries(authLevels).find(([key]) => key - String(user.auth_level) === 1)?.[1],
    [authLevels, user.auth_level]
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <BackHeader title={strings?.authLevel} />

      <MainCard title={strings?.currentAuthLevel}>
        <AuthLevelCard level={currentLevel?.title} limits={maxLimits} />
      </MainCard>

      {nextLevel && (
        <Box mt={5}>
          <Typography variant="h4">{strings?.nextAuthLevel}</Typography>
          <Typography variant="body2">{nextLevel?.update_method}</Typography>
          <MainCard>
            {/* TODO: authentication link */}
            {/* TODO: authentication link text */}
            {/* TODO: next level limits */}
            <AuthLevelCard level={nextLevel?.title} limits={maxLimits} authLink="/authentication" />
          </MainCard>
        </Box>
      )}
    </Box>
  );
};

export default AuthLevelPage;
