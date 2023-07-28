let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = 'https://5e2bf869-8829-46e7-83f6-aa63b96475f7.mock.pstmn.io/api/';
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
