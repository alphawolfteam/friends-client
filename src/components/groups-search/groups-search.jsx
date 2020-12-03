import React, { useContext } from 'react';
import { privateGroupsContext, publicGroupsContext } from '../shared/context';
import useStyles from "./groups-search.style.styles";

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