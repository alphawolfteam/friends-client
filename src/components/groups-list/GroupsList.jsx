import React, { useState } from 'react';
import GroupDialog from '../../pages/group-dialog/GroupDialog';
import GroupRaw from '../group-raw/GroupRaw';
import useStyles from './GroupsList.styles';

const GroupsList = ({ groups }) => {
  const classes = useStyles();
  const [selectedGroup, setSelectedGroup] = useState(undefined);

  return (
    <>
      <div className={classes.root}>
        {groups.map((group) => (
          <GroupRaw
            key={group._id}
            group={group}
            setSelectedGroup={setSelectedGroup}
          />
        ))}
      </div>
      {selectedGroup && (
        <GroupDialog
          group={selectedGroup}
          open={selectedGroup !== undefined}
          onClose={() => setSelectedGroup(undefined)}
        />
      )}
    </>
  );
};

export default GroupsList;
