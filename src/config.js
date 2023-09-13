let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = 'https://6c1af5f2-d5aa-4716-a598-866c5394b077.mock.pstmn.io/api';
}

const config = {
  basename: '/',
  defaultPath: '/dashboard',
  fontFamily: `'Vazir', 'Roboto', sans-serif`,
  borderRadius: 12,
  API_SERVER: BACKEND_SERVER,
  direction: 'rtl'
};

export default config;
