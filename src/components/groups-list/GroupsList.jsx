import React, { useState, useContext, useEffect } from 'react';
import GroupDialog from '../../pages/group-dialog/GroupDialog';
import GroupRaw from '../group-raw/GroupRaw';
import userContext from '../../stores/userStore';
import GroupService from '../../services/GroupsService';
import useStyles from './GroupsList.styles';

const GroupsList = ({ groups, searchValue }) => {
  const classes = useStyles();
  const currentUser = useContext(userContext);
  const [selectedGroupId, setSelectedGroupId] = useState(undefined);
  const [selectedGroup, setSelectedGroup] = useState(undefined);

  useEffect(() => {
    if (selectedGroupId !== undefined) {
      // TODO: Add loader
      GroupService.getGroupById(selectedGroupId)
        .then((res) => {
          setSelectedGroup(res);
        })
      // TODO: Error handler
        .catch((e) => console.log(e));
    }
  }, [selectedGroupId]);

  return (
    <>
      <div className={classes.root}>
        {groups.map((group) => (
          <GroupRaw
            key={group._id}
            group={group}
            setSelectedGroupId={(value) => setSelectedGroupId(value)}
            searchValue={searchValue}
            currentUserRole={
              GroupService.getUserRoleValue(group, currentUser.genesisId)
            }
          />
        ))}
      </div>
      {selectedGroup && selectedGroupId && (
        <GroupDialog
          group={selectedGroup}
          open={selectedGroup !== undefined && selectedGroupId !== undefined}
          onClose={() => {
            setSelectedGroupId(undefined);
            setSelectedGroup(undefined);
          }}
        />
      )}
    </>
  );
};

export default GroupsList;
