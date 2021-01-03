import React, { useMemo } from 'react';
import {
  Card,
  CardContent,
  Tooltip,
  Typography,
  ButtonBase,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './GroupRaw.styles';
import LockIcon from '../lock-icon/LockIcon';
import RoleIcon from '../role-icon/RoleIcon';
import TagsList from '../tags-list/TagsList';

const getSortedTagsByString = (tagsList, string) => {
  const matchedTags = [];
  const unmatchedTags = [];
  tagsList.forEach((tag) => {
    if (tag.startsWith(string)) {
      matchedTags.push(tag);
    } else {
      unmatchedTags.push(tag);
    }
  });
  return [...matchedTags, ...unmatchedTags];
};

const GroupRaw = ({
  searchValue,
  group,
  setSelectedGroup,
  currentUserRole,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const sortedGroupTags = useMemo(() => getSortedTagsByString(group.tags, searchValue),
    [group.tags, searchValue]);

  return (
    <Card className={classes.root}>
      <ButtonBase
        className={classes.buttonBase}
        onClick={() => setSelectedGroup(group)}
      >
        <RoleIcon role={currentUserRole} />
        <CardContent className={classes.cardContent}>
          <div className={classes.mainContent}>
            <div className={classes.groupIcon}>
              <img className={classes.img} src={group.icon} alt="icon" />
            </div>
            <Tooltip title={group.name}>
              <Typography className={classes.groupName}>{group.name}</Typography>
            </Tooltip>
          </div>
          <div className={classes.tagsList}>
            <TagsList tags={sortedGroupTags} maxTagsCount={3} />
          </div>
          <div className={classes.info}>
            <LockIcon type={group.type} />
            <Typography className={classes.groupAmount}>
              {group.users.length}
              {' '}
              {t('title.friends')}
            </Typography>
          </div>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default GroupRaw;
