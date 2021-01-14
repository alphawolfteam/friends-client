import React from 'react';
import IconInput from '../../shared/icon-input/IconInput';
import GroupNameInput from '../group-name-input/GroupNameInput';
import LockIconInput from '../../shared/lock-icon-input/LockIconInput';
import {
  setNewGroupIcon,
  setNewGroupType,
} from '../../shared/sharedFunctions';
import useStyles from './AddDialogTitle.styles';

const AddDialogTitle = ({ newGroup, setNewGroup, DEFAULT_ICON }) => {
  const classes = useStyles();

  return (
    <>
      <IconInput
        shownIcon={newGroup.icon}
        initialIcon={DEFAULT_ICON}
        onChange={(newIcon) => setNewGroupIcon(setNewGroup, newIcon)}
      />
      <div className={classes.title}>
        <GroupNameInput group={newGroup} setGroup={setNewGroup} />
        <LockIconInput
          type={newGroup.type}
          onChange={(newType) => setNewGroupType(setNewGroup, newType)}
        />
      </div>
    </>
  );
};

export default AddDialogTitle;
