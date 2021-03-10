import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  ButtonBase,
  Tooltip,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { getSortedTagsByString } from '../../shared/sharedFunctions';
import useStyles from './GroupRaw.styles';
import LockIcon from '../../shared/lock-icon/LockIcon';
import RoleIcon from '../role-icon/RoleIcon';
import TagsList from '../../shared/tags-list/TagsList';

const MAX_TAGS_COUNT = 3;

const GroupRaw = ({
  searchValue,
  group,
  setSelectedGroupId,
  currentUserRole,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const renderMainContent = () => (
    <div className={classes.mainContent}>
      <div className={classes.groupIcon}>
        <img className={classes.img} src={group.icon} alt="icon" />
      </div>
      <div className={classes.groupTitle}>
        <Tooltip title={group.name}>
          <Typography className={classes.groupName}>
            {group.name}
          </Typography>
        </Tooltip>
        <Typography className={classes.groupId}>
          #
          {group._id.substr(group._id.length - 4)}
        </Typography>
      </div>
    </div>
  );

  const renderInfo = () => (
    <div className={classes.info}>
      <LockIcon type={group.type} />
      <Typography className={classes.groupAmount}>
        {group.users.length === 1 ? t('title.oneMember')
          : (
            <>
              {group.users.length}
              {' '}
              {t('title.members')}
            </>
          )}
      </Typography>
    </div>
  );

  return (
    <Card className={classes.root}>
      <ButtonBase
        className={classes.buttonBase}
        onClick={() => setSelectedGroupId(group._id)}
      >
        <RoleIcon role={currentUserRole} />
        <CardContent className={classes.cardContent}>
          {renderMainContent()}
          <div className={classes.tagsList}>
            <TagsList
              tags={
                getSortedTagsByString(group.tags, searchValue)
              }
              maxTagsCount={MAX_TAGS_COUNT}
            />
          </div>
          {renderInfo()}
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default GroupRaw;
