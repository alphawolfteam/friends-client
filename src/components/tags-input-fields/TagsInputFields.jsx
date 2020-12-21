import React from 'react';
import DeletableTag from '../deletable-tag/DeletableTag';
import useStyles from './TagsInputFields.styles';

const TagsInputFields = ({ group, setGroup }) => {
  const classes = useStyles();

  const handleRemoveTag = (tagToRemove) => {
    setGroup((prevValue) => {
      const tagsList = [...prevValue.tags].filter((tag) => tag !== tagToRemove);
      return { ...prevValue, tags: tagsList };
    });
  };

  // const handleAddTag = (newTag) => {
  //   // TODO: Add validation (not adding existing tag)
  //   setGroup((prevValue) => {
  //     const tagsList = [...prevValue.users];
  //     tagsList.push(newTag);
  //     return { ...prevValue, tags: tagsList };
  //   });
  // };

  return (
    <div className={classes.root}>
      {group.tags.length > 0 && (
        <>
          {
            group.tags.map((tag) => (
              <DeletableTag tag={tag} onDelete={() => handleRemoveTag(tag)} />
            ))
          }
        </>
      )}
    </div>
  );
};

export default TagsInputFields;
