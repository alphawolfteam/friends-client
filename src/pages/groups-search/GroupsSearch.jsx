import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  privateGroupsContext,
  // publicGroupsContext,
} from "../../stores/groupsStore";
import { userContext } from "../../stores/userStore";
import useStyles from "./GroupsSearch.style";
import loadingAnimation from "../../images/loading.gif";
import GroupsList from "../../components/groups-list/GroupsList";
import { Typography } from "@material-ui/core";
import SearchBar from "../../components/search-bar/SearchBar";
import Scrollbar from "react-scrollbars-custom";
import config from "../../appConf";

const rolesEnum = config.rolesEnum;
const getFilteredGroups = (groups, searchValue) => {
  return searchValue !== ""
    ? groups.filter(
        (privateGroup) =>
          privateGroup.name
            .split(" ")
            .filter((word) => word.startsWith(searchValue)).length > 0 ||
          privateGroup.name.startsWith(searchValue)
      )
    : groups;
};

const getFilteredPrivateGroups = (privateGroups, searchValue, user) => {
  const filteredGroups = getFilteredGroups(privateGroups, searchValue);
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

const GroupsSearch = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const user = useContext(userContext);
  const privateGroups = useContext(privateGroupsContext);

  useEffect(() => {
    setIsLoading(privateGroups === undefined);
  }, [privateGroups]);

  const renderLoading = () => {
    return (
      <div className={classes.loading}>
        <img src={loadingAnimation} alt="loading" />
      </div>
    );
  };

  const filteredPrivateGroups = useMemo(
    () => getFilteredPrivateGroups(privateGroups, searchValue, user),
    [privateGroups, searchValue, user]
  );

  return (
    <>
      {isLoading ? (
        renderLoading()
      ) : (
        <div className={classes.root}>
          <SearchBar setSearchValue={setSearchValue} />
          <div className={classes.scrollBar}>
            <Scrollbar>
              {filteredPrivateGroups.length > 0 ? (
                <GroupsList groups={filteredPrivateGroups} />
              ) : (
            <Typography className={classes.message}>לא נמצאו אף קבוצות</Typography>
              )}
            </Scrollbar>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupsSearch;
