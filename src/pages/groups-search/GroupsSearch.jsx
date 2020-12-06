import React, { useCallback, useEffect, useState } from "react";
// import {
//   privateGroupsContext,
//   publicGroupsContext,
// } from "../../stores/groupsStore";
import GroupsService from "../../services/GroupsService";
import useStyles from "./GroupsSearch.style";
import loadingAnimation from "../../images/loading.gif";
import GroupsList from "../../components/groups-list/GroupsList";

const GroupsSearch = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [privateGroups, setPrivateGroups] = useState([]);

  const initPrivateGroups = useCallback(() => {
    GroupsService.getPrivateGroups()
      .then((privateGroups) => {
        console.log('here')
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
    return searchValue !== ""
      ? privateGroups.filter((privateGroup) =>
          privateGroup.name.startsWith(searchValue)
        )
      : privateGroups;
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
