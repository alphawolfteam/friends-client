import React from 'react';
import {
  Card,
  CardContent,
  Tooltip,
  Typography,
  ButtonBase,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { getSortedTagsByString } from '../../shared/functions';
import useStyles from './GroupRaw.styles';
import LockIcon from '../lock-icon/LockIcon';
import RoleIcon from '../role-icon/RoleIcon';
import TagsList from '../tags-list/TagsList';

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
          {group._id.slice(0, 4)}
        </Typography>
      </div>
    </div>
  );

  const renderInfo = () => (
    <div className={classes.info}>
      <LockIcon type={group.type} />
      <Typography className={classes.groupAmount}>
        {group.users.length}
        {' '}
        {t('title.friends')}
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
