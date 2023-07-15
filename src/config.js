let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = 'http://localhost:8000/api/';
}

const config = {
  basename: '/',
  defaultPath: '/dashboard',
  fontFamily: `'Vazir', 'Roboto', sans-serif`,
  borderRadius: 12,
  API_SERVER: BACKEND_SERVER,
  direction: 'ltr'
};

export default config;
