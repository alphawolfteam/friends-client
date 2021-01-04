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
  setSelectedGroup,
  currentUserRole,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const mainContent = () => (
    <div className={classes.mainContent}>
      <div className={classes.groupIcon}>
        <img className={classes.img} src={group.icon} alt="icon" />
      </div>
      <Tooltip title={group.name}>
        <Typography className={classes.groupName}>
          {group.name}
        </Typography>
      </Tooltip>
    </div>
  );

  const info = () => (
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
        onClick={() => setSelectedGroup(group)}
      >
        <RoleIcon role={currentUserRole} />
        <CardContent className={classes.cardContent}>
          {mainContent()}
          <div className={classes.tagsList}>
            <TagsList
              tags={
                getSortedTagsByString(group.tags, searchValue)
              }
              maxTagsCount={MAX_TAGS_COUNT}
            />
          </div>
          {info()}
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default GroupRaw;
