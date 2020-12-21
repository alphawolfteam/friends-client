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
import friendsLogo from './images/logo.svg';
import unitLogo from './images/unitLogo.svg';
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
    initAuthUser();
  }, [initAuthUser]);

  const renderUnauthorized = () => <span>unauthorized</span>;

  const renderFriends = () => (
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
      <img src={friendsLogo} className={classes.friendsLogo} alt="friendsLogo" />
      <span className={classes.text}>powered by</span>
      <img src={unitLogo} className={classes.unitLogo} alt="unitLogo" />
    </div>
  );

  return isLoading
    ? renderLoading()
    : renderFriends();
};

export default App;
