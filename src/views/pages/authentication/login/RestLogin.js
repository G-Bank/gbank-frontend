import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import configData from '../../../../config';

// material-ui
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Snackbar, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

// project imports
import useScriptRef from '../../../../hooks/useScriptRef';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { ACCOUNT_INITIALIZE } from './../../../../store/actions';
import { strings } from '../../../../localizedString';

// style constant
const useStyles = makeStyles((theme) => ({
  redButton: {
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: theme.palette.grey[50],
    border: '1px solid',
    borderColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem'
    }
  },
  signDivider: {
    flexGrow: 1
  },
  signText: {
    cursor: 'unset',
    margin: theme.spacing(2),
    padding: '5px 56px',
    borderColor: theme.palette.grey[100] + ' !important',
    color: theme.palette.grey[900] + '!important',
    fontWeight: 500
  },
  loginIcon: {
    marginRight: '16px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '8px'
    }
  },
  loginInput: {
    ...theme.typography.customInput
  }
}));

const RestLogin = (props, { ...others }) => {
  const classes = useStyles();
  const dispatcher = useDispatch();
  const { direction } = useSelector((state) => state.customization);

  const scriptedRef = useScriptRef();

  function getOTP(phone) {
    axios
      .post(configData.API_SERVER + 'login/', {
        phone_number: phone
      })

      .then(function (response) {
        setOTP(response.data.otp);
        handleClick();
      });
  }

  const [open, setOpen] = React.useState(false);
  const [otp, setOTP] = React.useState();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          phonenumber: '',
          otp: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          phonenumber: Yup.string().length(11).required(strings.phoneNumberError),
          otp: Yup.number().min(1000).max(9999).required(strings.otpError)
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            axios
              .post(configData.API_SERVER + 'verify/', {
                phone_number: values.phonenumber,
                otp: values.otp
              })
              .then(function (response) {
                if (response.status === 200) {
                  console.log('here 2');
                  dispatcher({
                    type: ACCOUNT_INITIALIZE,
                    payload: { isLoggedIn: true, user: {}, token: response.data.token }
                  });
                  if (scriptedRef.current) {
                    setStatus({ success: true });
                    setSubmitting(false);
                  }
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
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.phonenumber && errors.phonenumber)} className={classes.loginInput}>
              <InputLabel htmlFor="outlined-adornment-phonenumber-login">{strings.phoneNumber}</InputLabel>
              <OutlinedInput
                id="outlined-adornment-phonenumber-login"
                type="text"
                value={values.phonenumber}
                name="phonenumber"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value.length === 11) getOTP(e.target.value);
                }}
                label={strings.phoneNumber}
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
              {touched.phonenumber && errors.phonenumber && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-phonenumber-login"
                  style={{ textAlign: direction === 'ltr' ? 'left' : 'right' }}
                >
                  {errors.phonenumber}
                </FormHelperText>
              )}
            </FormControl>

            {values.phonenumber.length === 11 && (
              <FormControl fullWidth error={Boolean(touched.otp && errors.otp)} className={classes.loginInput}>
                <InputLabel htmlFor="outlined-adornment-otp-login">{strings.otp}</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-otp-login"
                  type={'number'}
                  value={values.otp}
                  name="otp"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label={strings.otp}
                  inputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
                {touched.otp && errors.otp && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-otp-login"
                    style={{ textAlign: direction === 'ltr' ? 'left' : 'right' }}
                  >
                    {errors.otp}
                  </FormHelperText>
                )}
              </FormControl>
            )}
            {values.phonenumber.length === 11 && (
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  onClick={() => getOTP(values.phonenumber)}
                  sx={{ textDecoration: 'none' }}
                >
                  {strings.otpWarning}
                </Typography>
              </Stack>
            )}
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
                  {strings.signIn}
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
      <Snackbar open={open} autoHideDuration={3 * 60 * 1000} onClose={handleClose} message={strings.otpText + otp} />
    </React.Fragment>
  );
};

export default RestLogin;
