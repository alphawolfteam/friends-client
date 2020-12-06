import React, { useContext } from 'react';
import { privateGroupsContext, publicGroupsContext } from '../../stores/groupsStore';
import useStyles from "./GroupsSearch.style.styles";

const GroupsSearch = () => {
  const classes = useStyles();
  const privateGroups = useContext(privateGroupsContext);
  const publicGroups = useContext(publicGroupsContext);

  // TODO: use useMemo
  return (
    <></>
  );
}

export default GroupsSearch;