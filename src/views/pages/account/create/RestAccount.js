import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import configData from '../../../../config';

// material-ui
import { Box, Button, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';

// third party
import { Formik } from 'formik';
import axios from 'axios';

// project imports
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { ACCOUNT_INITIALIZE } from './../../../../store/actions';
import { strings } from '../../../../localizedString';

const RestAccount = (props, { ...others }) => {
  const dispatcher = useDispatch();
  const account = useSelector((state) => state.account);

  const history = useHistory();

  function getTypesOfAccount() {
    setTypesOfAccount([
      { name: 'profitAccount', id: '1', disable: true },
      { name: 'investmentAccount', id: '1', disable: true },
      { name: 'moneyAccount', id: 'default', disable: false }
    ]);
  }

  useEffect(getTypesOfAccount, []);

  const [typesOfAccount, setTypesOfAccount] = React.useState([]);

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          type: 'default',
          submit: null
        }}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            axios
              .post(
                configData.API_SERVER + 'account/create/',
                {
                  type: values.type
                },
                { headers: { Authorization: `Token ${account.token}` } }
              )
              .then(function (response) {
                if (response.status === 200) {
                  dispatcher({
                    type: ACCOUNT_INITIALIZE,
                    payload: { ...account, hasAccount: true }
                  });
                  history.push('/');
                } else {
                  setStatus({ success: false });
                  setErrors({ submit: response.error });
                  setSubmitting(false);
                }
              })
              .catch(function (error) {
                setStatus({ success: false });
                setErrors({ submit: error.error });
                setSubmitting(false);
              });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl>
              <RadioGroup defaultValue={values.type} aria-labelledby="account-customized-radios" name="account-radios">
                {typesOfAccount.map((item) => (
                  <FormControlLabel
                    key={item.name}
                    value={item.id}
                    control={<Radio />}
                    label={strings[item.name]}
                    disabled={item.disable}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            {errors.submit && (
              <Box
                sx={{
                  mt: 3
                }}
              >
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box
              sx={{
                mt: 2
              }}
            >
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  {strings?.submit}
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RestAccount;
