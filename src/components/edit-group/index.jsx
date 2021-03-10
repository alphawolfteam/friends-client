import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import researchContext from '../../stores/researchStore';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditDialogTitle from './edit-dialog-title/EditDialogTitle';
import EditInfoPage from './edit-info-page/EditInfoPage';
import EditUsersListPage from './edit-users-list-page/EditUsersListPage';
import EditDialogActions from './edit-dialog-actions/EditDialogActions';
import Paging from '../shared/paging/Paging';

const EditGroupDialog = ({
  group,
  setGroup,
  open,
  onClose,
}) => {
  const research = useContext(researchContext);
  const { t } = useTranslation();
  const initialType = useMemo(() => group.type, []);
  const initialIcon = useMemo(() => group.icon, []);

  const handleOnClose = () => {
    if (initialType !== group.type) {
      research();
    } else {
      onClose();
    }
  };

  return (
    <DialogTemplate
      title={(
        <EditDialogTitle
          group={group}
          setGroup={setGroup}
          initialIcon={initialIcon}
        />
      )}
      content={(
        <Paging pages={[
          {
            headline: t('headline.additionalData'),
            component: (
              <EditInfoPage group={group} setGroup={setGroup} />
            ),
          },
          {
            headline: t('headline.friends'),
            component: (
              <EditUsersListPage group={group} setGroup={setGroup} />
            ),
          },
        ]}
        />
      )}
      actions={<EditDialogActions group={group} onClose={onClose} />}
      open={open}
      onClose={handleOnClose}
      cancelOnTouchOutside
    />
  );
};

export default EditGroupDialog;
