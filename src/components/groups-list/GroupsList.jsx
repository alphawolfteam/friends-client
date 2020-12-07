import React, { useState } from "react";
import GroupRaw from "../group-raw/GroupRaw";
import useStyles from "./GroupsList.styles";

const GroupsList = ({ groups }) => {
  const classes = useStyles();
  const [selectedGroup, setSelectedGroup] = useState(undefined);

  const handleSelectGroup = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
  };

  return (
    <div className={classes.root}>
      {groups.map((group) => (
        <GroupRaw
          onClick={() => handleSelectGroup(group)}
          key={group._id}
          group={group}
        />
      ))}
    </div>
  );
};

export default GroupsList;
