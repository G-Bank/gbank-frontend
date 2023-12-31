let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = 'http://82.115.20.224:1333/api/';
}

const config = {
  basename: '/app',
  defaultPath: '/dashboard',
  appVersion: process.env.REACT_APP_VERSION,
  fontFamily: `'Vazirmatn', 'Roboto', sans-serif`,
  borderRadius: 12,
  API_SERVER: BACKEND_SERVER,
  direction: 'rtl'
};

export default config;
