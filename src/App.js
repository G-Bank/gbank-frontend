import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes';
import theme from './assets/themes';
import NavigationScroll from './layout/NavigationScroll';
import { strings } from './localizedString';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

const App = () => {
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
    document.body.setAttribute('dir', customization.direction);
    document.documentElement.setAttribute('dir', customization.direction);
    strings.setLanguage(customization.direction === 'rtl' ? 'fa' : 'en');
  }, [customization.direction]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization, customization.direction)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
