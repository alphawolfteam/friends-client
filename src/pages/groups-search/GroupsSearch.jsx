import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  privateGroupsContext,
  publicGroupsContext,
} from "../../stores/groupsStore";
import { userContext } from "../../stores/userStore";
import useStyles from "./GroupsSearch.style";
import loadingAnimation from "../../images/loading.gif";
import GroupsList from "../../components/groups-list/GroupsList";
import TextDivider from "../../components/text-divider/TextDivider";
import { Typography, Fab, Tooltip } from "@material-ui/core";
import SearchBar from "../../components/search-bar/SearchBar";
import Scrollbar from "react-scrollbars-custom";
import { Add } from "@material-ui/icons";
import config from "../../appConf";

const rolesEnum = config.rolesEnum;

const isIncludesInSentence = (sentence, portion) => {
  return (
    sentence.startsWith(portion) ||
    sentence.split(" ").filter((word) => word.startsWith(portion)).length > 0
  );
};

const getFilteredGroups = (groups, searchValue) => {
  return searchValue !== ""
    ? groups.filter(
        (privateGroup) =>
          isIncludesInSentence(privateGroup.name, searchValue) ||
          privateGroup.tags.filter((tag) =>
            isIncludesInSentence(tag, searchValue)
          ).length > 0
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

const getFilteredPublicGroups = (publicGroups, searchValue) => {
  return searchValue !== "" ? getFilteredGroups(publicGroups, searchValue) : [];
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
    () => getFilteredPrivateGroups(privateGroups, searchValue, user),
    [privateGroups, searchValue, user]
  );

  const filteredPublicGroups = useMemo(
    () => getFilteredPublicGroups(publicGroups, searchValue),
    [publicGroups, searchValue]
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
              {filteredPrivateGroups.length > 0 ||
              filteredPublicGroups.length > 0 ? (
                <div className={classes.scrollBarContent}>
                  {filteredPrivateGroups.length > 0 && (
                    <>
                      <TextDivider text="הקבוצות שלי" />
                      <GroupsList groups={filteredPrivateGroups} />
                    </>
                  )}
                  {filteredPublicGroups.length > 0 && (
                    <>
                      <TextDivider text="קבוצות ציבוריות" />
                      <GroupsList groups={filteredPublicGroups} />
                    </>
                  )}
                </div>
              ) : (
                <Typography className={classes.message}>
                  לא נמצאו אף קבוצות
                </Typography>
              )}
            </Scrollbar>
          </div>
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
