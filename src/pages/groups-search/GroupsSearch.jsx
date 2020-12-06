import React, { useCallback, useContext, useEffect, useState } from "react";
// import {
//   privateGroupsContext,
//   publicGroupsContext,
// } from "../../stores/groupsStore";
import { userContext } from "../../stores/userStore";
import GroupsService from "../../services/GroupsService";
import useStyles from "./GroupsSearch.style";
import loadingAnimation from "../../images/loading.gif";
import GroupsList from "../../components/groups-list/GroupsList";

const GroupsSearch = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [privateGroups, setPrivateGroups] = useState([]);
  const user = useContext(userContext);

  const initPrivateGroups = useCallback(() => {
    GroupsService.getPrivateGroups()
      .then((privateGroups) => {
        console.log("here");
        setPrivateGroups(privateGroups);
      })
      // TODO: Error handler
      .catch((err) => console.log(err))
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    initPrivateGroups();
  }, [initPrivateGroups]);

  const renderLoading = () => {
    return (
      <div className={classes.loading}>
        <img src={loadingAnimation} alt="loading" />
      </div>
    );
  };

  const getFilteredPrivateGroups = () => {
    const filteredGroups =
      searchValue !== ""
        ? privateGroups.filter((privateGroup) =>
            privateGroup.name.startsWith(searchValue)
          )
        : privateGroups;
    const filteredOwnedGroups = [],
      filteredUnownedGroups = [];
    filteredGroups.forEach((filteredGroup) => {
      console.log(filteredGroup)
      // TODO: Check role
      if (filteredGroup.users.map((user) => user.id).includes(user._id)) {
        filteredOwnedGroups.push(filteredGroup);
      } else {
        filteredUnownedGroups.push(filteredGroup);
      }
    });
    return [...filteredOwnedGroups, ...filteredUnownedGroups];
  };

  return (
    <>
      {isLoading ? (
        renderLoading()
      ) : (
        <div className={classes.root}>
          <GroupsList groups={getFilteredPrivateGroups()} />
        </div>
      )}
    </>
  );
};

export default GroupsSearch;
