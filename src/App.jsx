import React, { useState, useEffect } from "react";
import AppBarComponent from "./components/app-bar/AppBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GroupsSearch from "./pages/groups-search/GroupsSearch";
import UserService from "./services/UserService";
import loadingAnimation from "./images/loading.gif";
import unitLogo from "./images/unitLogo.svg";
import { userContext } from './stores/userStore';
import useStyles from "./App.styles";

const App = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);

  const initAuthUser = () => {
    UserService.getAuthUser()
      .then((currentUser) => {
        setUser(currentUser);
        setIsAuthenticated(true);
      })
      .catch((err) => setIsAuthenticated(false))
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };

  useEffect(() => {
    initAuthUser();
  }, []);

  const renderFriends = () => {
    return (
      <Router>
        <div className={classes.app}>
          <userContext.Provider value={user}>
            <AppBarComponent />
          </userContext.Provider>
          <div>
            <Switch>
              <Route path="/">
                <GroupsSearch />
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  };

  const renderLoading = () => {
    return (
      <div className={classes.loading}>
        <img src={loadingAnimation} alt="loading"/>
        <div className={classes.poweredByDiv}>
          <span className={classes.poweredByText}>powered by</span>
          <img src={unitLogo} className={classes.unitLogo} alt="unitLogo"/>
        </div>
      </div>
    );
  };

  const renderUnauthorized = () => {
    return <span>unauthorized</span>;
  };

  return isLoading
    ? renderLoading()
    : isAuthenticated
    ? renderFriends()
    : renderUnauthorized();
};

export default App;
