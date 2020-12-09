import React, { useState, useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AppBarComponent from './components/app-bar/AppBar';
import {
  privateGroupsContext,
  publicGroupsContext,
} from './stores/groupsStore';
import { userContext, usersListContext } from './stores/userStore';
import GroupsSearch from './pages/groups-search/GroupsSearch';
import UsersService from './services/UsersService';
import loadingAnimation from './images/loading.gif';
import unitLogo from './images/unitLogo.svg';
import useStyles from './App.styles';
import GroupsService from './services/GroupsService';

const App = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);
  const [privateGroups, setPrivateGroups] = useState(undefined);
  const [publicGroups, setPublicGroups] = useState(undefined);
  const [usersList, setUsersList] = useState(undefined);

  const initAuthUser = useCallback(() => {
    UsersService.getAuthUser()
      .then((currentUser) => {
        setUser(currentUser);
        setIsAuthenticated(true);
      })
      .catch(() => setIsAuthenticated(false))
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  const initUsersList = useCallback(() => {
    UsersService.getUsersList()
      .then((res) => {
        setUsersList(res);
      })
      // TODO: Error handler
      .catch((err) => console.log(err));
  }, []);

  const initPrivateGroups = useCallback(() => {
    GroupsService.getPrivateGroups()
      .then((res) => {
        setPrivateGroups(res);
      })
      // TODO: Error handler
      .catch((err) => console.log(err));
  }, []);

  const initPublicGroups = useCallback(() => {
    GroupsService.getPublicGroups()
      .then((res) => {
        setPublicGroups(res);
      })
      // TODO: Error handler
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    initAuthUser();
    initPrivateGroups();
    initPublicGroups();
    initUsersList();
  }, [initAuthUser, initPrivateGroups, initPublicGroups, initUsersList]);

  const renderUnauthorized = () => <span>unauthorized</span>;

  const renderFriends = () => (
    isAuthenticated
      ? (
        <Router>
          <div className={classes.app}>
            <userContext.Provider value={user}>
              <AppBarComponent />
              <div>
                <Switch>
                  <Route path="/">
                    <privateGroupsContext.Provider value={privateGroups}>
                      <publicGroupsContext.Provider value={publicGroups}>
                        <usersListContext.Provider value={usersList}>
                          <GroupsSearch />
                        </usersListContext.Provider>
                      </publicGroupsContext.Provider>
                    </privateGroupsContext.Provider>
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
      <img src={loadingAnimation} alt="loading" />
      <div className={classes.poweredByDiv}>
        <span className={classes.poweredByText}>powered by</span>
        <img src={unitLogo} className={classes.unitLogo} alt="unitLogo" />
      </div>
    </div>
  );

  return isLoading
    ? renderLoading()
    : renderFriends();
};

export default App;
