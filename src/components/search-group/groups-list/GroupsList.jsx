import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import GroupDialog from '../../view-group/index';
import GroupRaw from '../group-raw/GroupRaw';
import userContext from '../../../stores/userStore';
import GroupsService from '../../../services/Mock/GroupsService';
// import GroupsService from '../../../services/GroupsService';
import useStyles from './GroupsList.styles';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';

const GroupsList = ({ groups, searchValue }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const currentUser = useContext(userContext);
  const [selectedGroupId, setSelectedGroupId] = useState(undefined);
  const [selectedGroup, setSelectedGroup] = useState(undefined);

  useEffect(() => {
    if (selectedGroupId !== undefined) {
      // TODO: Add loader
      GroupsService.getGroupById(selectedGroupId)
        .then((res) => {
          setSelectedGroup(res);
        })
        .catch(() => enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        ));
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
              GroupsService.getUserRoleValue(group, currentUser.genesisId)
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
