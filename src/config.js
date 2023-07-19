let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = 'https://376914ce-8df7-4567-999e-0c1f3a410a8e.mock.pstmn.io/api/';
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
