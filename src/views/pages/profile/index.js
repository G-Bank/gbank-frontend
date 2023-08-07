import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

// material ui
import { Avatar, Badge, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';

// third party
import axios from 'axios';

import { strings } from '../../../localizedString';
import MainCard from '../../../ui-component/cards/MainCard';
import RestProfile from './RestProfile';
import configData from '../../../config';

// style constant
const useStyles = makeStyles((theme) => ({
  addProfile: {
    margin: '0.1em',
    borderRadius: '50%',
    background: theme.palette.secondary.light,
    cursor: 'pointer'
  }
}));

const ProfilePage = () => {
  const classes = useStyles();

  const ref = useRef(null);

  const [profile, setProfile] = React.useState();
  const account = useSelector((state) => state.account);

  function getProfile() {
    if (account)
      axios
        .get(configData.API_SERVER + 'user/profile/', { headers: { Authorization: `Token ${account.token}` } })

        .then(function (response) {
          setProfile(response.data);
        });
  }

  function selectProfile() {
    ref.current.click();
  }

  function submitProfile(e) {
    const data = new FormData();
    data.append('picture', e.target.files[0]);
    try {
      axios({
        method: 'post',
        url: configData.API_SERVER + 'user/picture/',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(function (response) {
          if (response.status === 200) {
            setProfile({ ...profile, picture: response.data.picture });
          }
        })
        .catch(function (error) {
          console.log('error - ', error);
        });
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(getProfile, [account]);

  return (
    <MainCard title={strings?.profile}>
      {profile && (
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={<Chip className={classes.addProfile} label="+" onClick={selectProfile}></Chip>}
        >
          <input type="file" accept="image/*" ref={ref} hidden onChange={submitProfile} />
          <Avatar alt="Travis Howard" src={configData.API_SERVER + profile.picture} sx={{ width: 120, height: 120 }} />
        </Badge>
      )}
      <RestProfile profile={profile} />
    </MainCard>
  );
};

export default ProfilePage;
