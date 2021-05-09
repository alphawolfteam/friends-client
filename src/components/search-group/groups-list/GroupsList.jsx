import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import GroupDialog from '../../view-group/index';
import EditGroupDialog from '../../edit-group/index';
import GroupRaw from '../group-raw/GroupRaw';
import userContext from '../../../stores/userStore';
import GroupsService from '../../../services/GroupsService';
import config from '../../../appConf';
import CustomBackdrop from '../../shared/custom-backdrop/CustomBackdrop';

const SPINNER_SHOW_DELAY = 5;

const GroupsList = ({ groups, setGroups, searchValue }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const currentUser = useContext(userContext);
  const [selectedGroupId, setSelectedGroupId] = useState(undefined);
  const [selectedGroup, setSelectedGroup] = useState(undefined);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (selectedGroupId !== undefined) {
      const timeout = setTimeout(() => setShowLoader(true), SPINNER_SHOW_DELAY);
      GroupsService.getGroupById(selectedGroupId)
        .then((res) => setSelectedGroup(res))
        .catch(() => enqueueSnackbar(t('error.server'), { variant: 'error' }))
        .finally(() => {
          clearTimeout(timeout);
          setShowLoader(false);
        });
    }
  }, [selectedGroupId]);

  useEffect(() => {
    if (selectedGroup) {
      setGroups((prevValue) => prevValue.map((group) => (group._id === selectedGroup._id
        ? {
          ...selectedGroup,
          users: selectedGroup.users.map(({ user, role }) => ({
            id: user.id,
            role,
          })),
        }
        : group)));
    }
  }, [selectedGroup]);

  return (
    <>
      {groups.map((group) => (
        <GroupRaw
          key={group._id}
          group={group}
          setSelectedGroupId={(value) => setSelectedGroupId(value)}
          searchValue={searchValue}
          currentUserRole={GroupsService.getUserRole(
            group,
            currentUser.genesisId,
          )}
        />
      ))}
      {selectedGroup
        && selectedGroupId
        && (GroupsService.getUserRoleFromPopulatedGroup(
          selectedGroup,
          currentUser.genesisId,
        ) === config.roles.manager_role_value ? (
          <EditGroupDialog
            open={selectedGroup !== undefined && selectedGroupId !== undefined}
            onClose={() => {
              setSelectedGroupId(undefined);
              setSelectedGroup(undefined);
            }}
            group={selectedGroup}
            setGroup={setSelectedGroup}
          />
          ) : (
            <GroupDialog
              group={selectedGroup}
              open={selectedGroup !== undefined && selectedGroupId !== undefined}
              onClose={() => {
                setSelectedGroupId(undefined);
                setSelectedGroup(undefined);
              }}
            />
          ))}
      <CustomBackdrop open={showLoader} />
    </>
  );
};

export default GroupsList;
