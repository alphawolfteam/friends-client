import React, { useEffect, useState } from 'react';
import AppBarComponent from './components/app-bar/app-bar';
import useStyles from "./App.styles";
import { userContext } from './stores/userStore';

const App = () => {
  const classes = useStyles();
  const [user, setUser] = useState(undefined);

  const getUser = async () => {
    // TODO: get current user
    setUser({
      address: "רחוב הממתקים 34",
      adfsId: "t23458789@jello.com",
      currentUnit: "nitro unit",
      dischargeDay: "2022-11-30T22:00:00.000Z",
      displayName: "t23458789@jello.com",
      entityType: "digimon",
      exp: 1607005903,
      genesisId: "5e5688324203fc40043591aa",
      iat: 1607002303,
      id: "5e5688324203fc40043591aa",
      job: "רוצח",
      jti: "57c79308-5e5e-4205-8d69-c59025dc70fd",
      name: { firstName: "נייקי", lastName: "אדידס" },
      phoneNumbers: ["026666998", "052-1234565"],
      photo: null,
      provider: "Genesis",
      rank: "mega"
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (<>
    {
     // TODO: Add router
     user &&
      <div className={classes.root}>
        <userContext.Provider value={user}>
          <AppBarComponent />
        </userContext.Provider>
      </div>
    }
  </>
  );
}

export default App;
