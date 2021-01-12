import React from 'react';
import { IconButton } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { AddPhotoAlternateOutlined } from '@material-ui/icons';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
import useStyles from './AddIconButton.styles';
import CustomeSnackbarContent from '../custome-snackbar-content/CustomeSnackbarContent';

const AddIconButton = ({ iconsOptions, setIconsOptions, setSelectedIcon }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const newIcon = reader.result;
        if (!iconsOptions.includes(newIcon)) {
          setIconsOptions((prevValue) => [newIcon, ...prevValue]);
        }
        setSelectedIcon(newIcon);
      };
    } else {
      enqueueSnackbar(<CustomeSnackbarContent message={t('error.file')} />, { variant: 'error' });
    }
  };

  return (
    <CustomeTooltip
      title={t('tooltip.addNewPhoto')}
      className={classes.root}
      element={(
        <IconButton
          variant="contained"
          component="label"
          className={classes.iconButton}
        >
          <AddPhotoAlternateOutlined className={classes.icon} />
          <input
            accept="image/*"
            type="file"
            hidden
            multiple
            onChange={(e) => handleOnChange(e)}
          />
        </IconButton>
      )}
    />
  );
};

export default AddIconButton;
