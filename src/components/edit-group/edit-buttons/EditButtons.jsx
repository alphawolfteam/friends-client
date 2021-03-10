import React from 'react';
import {
  CircularProgress,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { EditOutlined, CheckOutlined, ClearOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './EditButtons.styles';

const EditButtons = ({
  editMode,
  onSave,
  onCancel,
  onEdit,
  isLoading,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const renderDeafultButtons = () => (
    <div className={classes.root}>
      <Tooltip title={t('tooltip.edit')}>
        <IconButton
          onClick={onEdit}
          className={classes.icon}
          size="small"
        >
          <EditOutlined />
        </IconButton>
      </Tooltip>
    </div>
  );

  const renderEditModeButtons = () => (
    (
      <div className={classes.root}>
        <Tooltip title={t('tooltip.save')}>
          <IconButton
            disabled={isLoading}
            onClick={onSave}
            className={classes.icon}
            size="small"
          >
            <CheckOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title={t('tooltip.cancel')}>
          <IconButton
            disabled={isLoading}
            onClick={onCancel}
            className={classes.icon}
            size="small"
          >
            <ClearOutlined />
          </IconButton>
        </Tooltip>
        { isLoading && <CircularProgress size={25} className={classes.progress} />}
      </div>
    )
  );

  return (editMode
    ? renderEditModeButtons()
    : renderDeafultButtons());
};

export default EditButtons;
