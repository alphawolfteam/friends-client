import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { ReactComponent as AddPhotoIcon } from '../../utils/images/addPicture.svg';
import useStyles from './AddIconButton.styles';

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
      enqueueSnackbar(t('error.file'), { variant: 'error' });
    }
  };

  return (
    <Tooltip title={t('tooltip.addNewPhoto')} className={classes.root}>
      <IconButton
        variant="contained"
        component="label"
        className={classes.iconButton}
      >
        <AddPhotoIcon className={classes.icon} />
        <input
          accept="image/*"
          type="file"
          hidden
          multiple
          onChange={(e) => handleOnChange(e)}
        />
      </IconButton>
    </Tooltip>
  );
};

export default AddIconButton;
