import React, { useState, useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AppBarComponent from './components/app-bar/AppBar';
import userContext from './stores/userStore';
import GroupsSearch from './pages/groups-search/GroupsSearch';
import { ReactComponent as FriendsLogo } from './utils/images/logo.svg';
import { ReactComponent as UnitLogo } from './utils/images/unitLogo.svg';
import useStyles from './App.styles';
import AuthService from './services/AuthService';

const App = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const initAuthUser = useCallback(() => {
    AuthService.getAuthUser()
      .then((res) => {
        setCurrentUser(res);
        setIsAuthenticated(true);
      })
      .catch(() => setIsAuthenticated(false))
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      initAuthUser();
    }
  }, [initAuthUser]);

  const renderUnauthorized = () => <span>unauthorized</span>;

  const renderApp = () => (
    isAuthenticated
      ? (
        <Router>
          <div className={classes.app}>
            <userContext.Provider value={currentUser}>
              <AppBarComponent />
              <div>
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
