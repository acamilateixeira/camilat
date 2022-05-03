import { CssBaseline, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Dashboard } from '../../components/dashboard';
import { Home } from '../../pages/home';

export function AppRoutes() {
  const theme = useTheme();
  const screenSizeIsNotSupported = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  if (screenSizeIsNotSupported) {
    return <Typography>Tamanho de tela não suportado</Typography>;
  }

  return (
    <BrowserRouter>
      <Dashboard>
        <CssBaseline />
        <Switch>
          <Route exact path='/camilat' component={Home} />
        </Switch>
      </Dashboard>
    </BrowserRouter>
  );
}
