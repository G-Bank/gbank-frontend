import React from 'react';

import { Box, Button, OutlinedInput, Typography } from '@mui/material';

import { strings } from '../../../localizedString';
import BackHeader from '../../../ui-component/BackHeader';
import MainCard from '../../../ui-component/cards/MainCard';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import Loader from '../../../ui-component/Loader';
import { useRef } from 'react';
import { useState } from 'react';
import { setUserProfile } from '../../../api/user';

const ProfileAuthentication = () => {
  const formRef = useRef(null);

  const { user } = useSelector((state) => state.account);

  const [form, setForm] = useState({ ...user });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!user || loading) {
    return <Loader />;
  }

  const renderInput = (key, disabled = false) => (
    <OutlinedInput
      fullWidth
      type="text"
      disabled={disabled}
      value={form[key]}
      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
      name={key}
      placeholder={strings?.[key]}
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setUserProfile(form)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        const code = err.response.data.code;
        if (code === 'kyc-01') {
          setError(strings?.enter_national_code);
        }
        if (code === 'kyc-02') {
          setError(strings?.national_code_not_matched);
        }
        setLoading(false);
      });
  };

  return (
    <Box>
      <BackHeader title={strings?.authentication} />

      {user.is_national_code_verified ? (
        <>
          <MainCard>
            <Typography>{strings?.authenticationSuccessful}</Typography>
          </MainCard>
          <Link to="/dashboard">
            <Button style={{ color: 'white' }} fullWidth variant="contained" color="success">
              {strings?.backToHomePage}
            </Button>
          </Link>
        </>
      ) : (
        <form style={{ width: '100%' }} ref={formRef} onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" mt={4} gap={1}>
            {renderInput('firstname')}
            {renderInput('lastname')}
            {renderInput('phone_number', true)}
            {renderInput('national_code', user.is_national_code_verified)}
            {renderInput('date_of_birth')}

            <Typography mx="auto" variant="h5" color="error">
              {error}
            </Typography>

            <Button fullWidth size="large" type="submit" variant="contained" color="info">
              {strings?.submit}
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default ProfileAuthentication;
