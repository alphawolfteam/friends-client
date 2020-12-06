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
import config from "../../appConf";

const rolesEnum = config.rolesEnum;

const GroupsSearch = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [privateGroups, setPrivateGroups] = useState([]);
  const user = useContext(userContext);

  const initPrivateGroups = useCallback(() => {
    GroupsService.getPrivateGroups()
      .then((privateGroups) => {
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
      let owned = false;
      for (const groupUser of filteredGroup.users) {
        if (user.id === groupUser.id && groupUser.role === rolesEnum.MANAGER) {
          owned = true;
          break;
        }
      }
      owned
        ? filteredOwnedGroups.push(filteredGroup)
        : filteredUnownedGroups.push(filteredGroup);
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
