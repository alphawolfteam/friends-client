import React, { useState, useContext } from 'react';
import GroupDialog from '../../pages/group-dialog/GroupDialog';
import GroupRaw from '../group-raw/GroupRaw';
import userContext from '../../stores/userStore';
import GroupService from '../../services/GroupsService';
import useStyles from './GroupsList.styles';

const GroupsList = ({ groups, searchValue }) => {
  const classes = useStyles();
  const currentUser = useContext(userContext);
  const [selectedGroup, setSelectedGroup] = useState(undefined);

  return (
    <>
      <div className={classes.root}>
        {groups.map((group) => (
          <GroupRaw
            key={group._id}
            group={group}
            setSelectedGroup={setSelectedGroup}
            searchValue={searchValue}
            currentUserRole={GroupService.getUserRoleCode(group, currentUser.id)}
          />
        ))}
      </div>
      {selectedGroup && (
        <GroupDialog
          group={selectedGroup}
          open={selectedGroup !== undefined}
          onClose={() => setSelectedGroup(undefined)}
          currentUserRole={GroupService.getUserRoleCode(selectedGroup, currentUser.id)}
        />
      )}
    </>
  );
};

export default GroupsList;
