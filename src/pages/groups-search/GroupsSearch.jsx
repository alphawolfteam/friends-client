import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  privateGroupsContext,
  publicGroupsContext,
} from "../../stores/groupsStore";
import { userContext } from "../../stores/userStore";
import useStyles from "./GroupsSearch.style";
import loadingAnimation from "../../images/loading.gif";
import { Fab, Tooltip } from "@material-ui/core";
import GroupSearchBar from "../../components/group-search-bar/GroupSearchBar";
import { Add } from "@material-ui/icons";
import config from "../../appConf";
import ScrollableGroupsResult from "../../components/scrollable-groups-result/ScrollableGroupsResult";

const rolesEnum = config.rolesEnum;

const isIncludesInSentence = (sentence, portion) => {
  return (
    sentence.startsWith(portion) ||
    sentence.split(" ").filter((word) => word.startsWith(portion)).length > 0
  );
};

const getFilteredGroups = (groups, searchValue) => {
  return groups.filter(
    (privateGroup) =>
      isIncludesInSentence(privateGroup.name, searchValue) ||
      privateGroup.tags.filter((tag) => isIncludesInSentence(tag, searchValue))
        .length > 0
  );
};

const getSortedPrivateGroups = (privateGroups, user) => {
  const ownedGroups = [],
    unownedGroups = [];
  privateGroups.forEach((group) => {
    let owned = false;
    for (const groupUser of group.users) {
      if (user.id === groupUser.id && groupUser.role === rolesEnum.MANAGER) {
        owned = true;
        break;
      }
    }
    owned
      ? ownedGroups.push(group)
      : unownedGroups.push(group);
  });

  return [...ownedGroups, ...unownedGroups];
};

const GroupsSearch = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState(false);
  const user = useContext(userContext);
  const privateGroups = useContext(privateGroupsContext);
  const publicGroups = useContext(publicGroupsContext);

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
    () =>
      searchValue !== ""
        ? getFilteredGroups(privateGroups, searchValue)
        : privateGroups,
    [privateGroups, searchValue]
  );

  const filteredPublicGroups = useMemo(
    () =>
      searchValue !== "" ? getFilteredGroups(publicGroups, searchValue) : [],
    [publicGroups, searchValue]
  );

  const sortedPrivateGroups = useMemo(
    () => getSortedPrivateGroups(filteredPrivateGroups, user),
    [filteredPrivateGroups, user]
  );

  return (
    <>
      {isLoading ? (
        renderLoading()
      ) : (
        <div className={classes.root}>
          <GroupSearchBar setSearchValue={setSearchValue} />
          <ScrollableGroupsResult
            privateGroups={sortedPrivateGroups}
            publicGroups={filteredPublicGroups}
          />
          <Tooltip title="הוסף קבוצה חדשה">
            <Fab
              className={classes.addButton}
              onClick={() => setOpenAddGroupDialog(true)}
            >
              <Add />
            </Fab>
          </Tooltip>
        </div>
      )}
    </>
  );
};

export default GroupsSearch;
