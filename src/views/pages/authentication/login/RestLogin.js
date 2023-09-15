import React from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Snackbar, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from '../../../../hooks/useScriptRef';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { strings } from '../../../../localizedString';
import { getOTP, loginUser } from '../../../../api/user';

// style constant
const useStyles = makeStyles((theme) => ({
  loginInput: {
    ...theme.typography.customInput
  }
}));

const RestLogin = (props, { ...others }) => {
  const classes = useStyles();
  const { direction } = useSelector((state) => state.customization);

  const scriptedRef = useScriptRef();

  function requestOTP(phone) {
    getOTP(phone)
      .then(function (response) {
        setOTP(response.data.otp);
        handleClick();
      })
      .catch(function (error) {
        console.log('error - ', error);
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
          phonenumber: Yup.string().length(11).required(strings?.phoneNumberError),
          otp: Yup.number().min(1000).max(9999).required(strings?.otpError)
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          loginUser(values.phonenumber, values.otp)
            .then(() => {
              if (scriptedRef.current) {
                setStatus({ success: true });
                setSubmitting(false);
              }
            })
            .catch((err) => {
              setStatus({ success: false });
              setErrors({ submit: err.error });
              setSubmitting(false);
            });
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.phonenumber && errors.phonenumber)} className={classes.loginInput}>
              <InputLabel htmlFor="outlined-adornment-phonenumber-login">{strings?.phone_number}</InputLabel>
              <OutlinedInput
                id="outlined-adornment-phonenumber-login"
                type="text"
                value={values.phonenumber}
                name="phonenumber"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value.length === 11) requestOTP(e.target.value);
                }}
                label={strings?.phone_number}
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
                <InputLabel htmlFor="outlined-adornment-otp-login">{strings?.otp}</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-otp-login"
                  type={'number'}
                  value={values.otp}
                  name="otp"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label={strings?.otp}
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
                  onClick={() => requestOTP(values.phonenumber)}
                  sx={{ textDecoration: 'none' }}
                >
                  {strings?.otpWarning}
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
                  {strings?.signIn}
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
      <Snackbar open={open} autoHideDuration={3 * 60 * 1000} onClose={handleClose} message={strings?.otpText + otp} />
    </React.Fragment>
  );
};

export default RestLogin;
