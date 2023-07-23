import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import configData from '../../../config';

// material-ui
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

// project imports
import AnimateButton from '../../../ui-component/extended/AnimateButton';
import { ACCOUNT_INITIALIZE } from '../../../store/actions';
import { strings } from '../../../localizedString';
import Loader from '../../../ui-component/Loader';

// style constant
const useStyles = makeStyles((theme) => ({
  input: {
    ...theme.typography.customInput,
    margin: '0.1em'
  }
}));

const RestProfile = (props, { ...others }) => {
  const classes = useStyles();
  const dispatcher = useDispatch();
  const { direction } = useSelector((state) => state.customization);

  const account = useSelector((state) => state.account);

  const Headers = ['firstname', 'lastname', 'national_code', 'email', 'address', 'postal_code', 'date_of_birth'];

  if (!props.profile) return <Loader />;

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          ...props.profile,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().required(strings?.generalError),
          lastname: Yup.string().required(strings?.generalError),
          national_code: Yup.string().length(10).required(strings?.generalError),
          email: Yup.string().email().required(strings?.generalError),
          address: Yup.string().required(strings?.generalError),
          postal_code: Yup.string(),
          date_of_birth: Yup.date().required(strings?.generalError)
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            axios
              .post(configData.API_SERVER + 'user/profile/', {
                firstname: values.firstname,
                lastname: values.lastname,
                national_code: values.national_code,
                email: values.email,
                address: values.address,
                postal_code: values.postal_code,
                date_of_birth: values.date_of_birth
              })
              .then(function (response) {
                if (response.status === 200) {
                  dispatcher({
                    type: ACCOUNT_INITIALIZE,
                    payload: { isLoggedIn: true, user: response.data, token: account.token }
                  });
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
            {Headers.map((item, i) => (
              <FormControl
                key={i}
                error={Boolean(touched[item] && errors[item])}
                className={classes.input}
                sx={{ width: { md: '45%', sm: '95%', xs: '100%' }, p: 0.5 }}
              >
                <InputLabel htmlFor={'outlined-adornment-' + item}>{strings[item]}</InputLabel>
                <OutlinedInput
                  id={'outlined-adornment-' + item}
                  type="text"
                  value={values[item]}
                  name={item}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label={strings[item]}
                  inputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
                {touched[item] && errors[item] && (
                  <FormHelperText
                    error
                    id={'standard-weight-helper-text-' + item}
                    style={{ textAlign: direction === 'ltr' ? 'left' : 'right' }}
                  >
                    {errors[[item]]}
                  </FormHelperText>
                )}
              </FormControl>
            ))}

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
                <Button disableElevation disabled={isSubmitting} size="large" type="submit" variant="contained" color="secondary">
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

export default RestProfile;
