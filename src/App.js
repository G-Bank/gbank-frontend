import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';
import Routes from './routes';
import theme from './assets/themes';
import NavigationScroll from './layout/NavigationScroll';
import { strings } from './localizedString';

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
