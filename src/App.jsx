import React, { useState, useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import AppBarComponent from './components/app-bar/index';
import userContext from './stores/userStore';
import GroupsSearch from './components/search-group/index';
import CustomeSnackbarContent from
  './components/shared/custome-snackbar-content/CustomeSnackbarContent';
import { ReactComponent as FriendsLogo } from './utils/images/logo.svg';
import { ReactComponent as UnitLogo } from './utils/images/unitLogo.svg';
import useStyles from './App.styles';
import AuthService from './services/AuthService';
import ConfigService from './services/ConfigService';
import { createApiGatewayInstance } from './axiosConf';

const App = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const initAuthUser = useCallback(() => {
    AuthService.getAuthUser()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => setIsAuthenticated(false))
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  useEffect(async () => {
    ConfigService.setConfigVariables().then(() => {
      createApiGatewayInstance();
      if (!isAuthenticated) {
        initAuthUser();
      }
    }).catch(() => enqueueSnackbar(
      <CustomeSnackbarContent message={t('error.server')} />,
      { variant: 'error' },
    ));
  }, [initAuthUser]);

  const renderUnauthorized = () => <span>unauthorized</span>;

  const renderApp = () => (
    isAuthenticated
      ? (
        <Router>
          <div className={classes.app}>
            <userContext.Provider value={currentUser}>
              <AppBarComponent />
              <div className={classes.page}>
                <Switch>
                  <Route path="/">
                    <GroupsSearch />
                  </Route>
                  <Redirect to="/" />
                </Switch>
              </div>
            </userContext.Provider>
          </div>
        </Router>
      )
      : renderUnauthorized()
  );

  const renderLoading = () => (
    <div className={classes.loading}>
      <FriendsLogo className={classes.friendsLogo} />
      <span className={classes.text}>powered by</span>
      <UnitLogo className={classes.unitLogo} />
    </div>
  );

  return isLoading
    ? renderLoading()
    : renderApp();
};

export default App;
