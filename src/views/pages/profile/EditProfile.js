import React from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { Avatar, Badge, Box, Button, Chip, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from '../../../ui-component/extended/AnimateButton';
import { strings } from '../../../localizedString';
import Loader from '../../../ui-component/Loader';
import { setUserProfile, setUserProfilePicture } from '../../../api/user.js';
import BackHeader from '../../../ui-component/BackHeader';
import { useRef } from 'react';

// style constant
const useStyles = makeStyles((theme) => ({
  input: {
    ...theme.typography.customInput,
    margin: '0.1em'
  }
}));

const EditProfile = () => {
  const classes = useStyles();

  const { direction } = useSelector((state) => state.customization);
  const { user } = useSelector((state) => state.account);

  const ref = useRef(null);

  const Headers = ['firstname', 'lastname', 'email', 'address', 'postal_code', 'date_of_birth'];

  function selectProfile() {
    ref.current.click();
  }

  function submitProfile(e) {
    const data = new FormData();
    data.append('picture', e.target.files[0]);
    setUserProfilePicture(data).catch(function (error) {
      console.log('error - ', error);
    });
  }

  if (!user) return <Loader />;

  return (
    <React.Fragment>
      <BackHeader title={strings?.profile} />
      <Badge
        overlap="circular"
        style={{ margin: 16 }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<Chip className={classes.addProfile} label="+" onClick={selectProfile}></Chip>}
      >
        <input type="file" accept="image/*" ref={ref} hidden onChange={submitProfile} />
        <Avatar alt={user.firstname} src={user.picture} sx={{ width: 80, height: 80 }} />
      </Badge>
      <Formik
        initialValues={{
          ...user,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string(),
          lastname: Yup.string(),
          email: Yup.string().email(),
          address: Yup.string(),
          postal_code: Yup.string(),
          date_of_birth: Yup.date()
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setUserProfile(values).catch(function (error) {
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
          <form noValidate onSubmit={handleSubmit}>
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

export default EditProfile;
