import React from "react";
import { Chip } from "@material-ui/core";
import useStyles from "./TagsList.styles";

const TagsList = ({ tags }) => {
  const classes = useStyles();

  return (
    <>
      {tags.length > 0 && (
        <div>
          {tags.map((tag) => (
            <Chip className={classes.label} key={tag} label={`#${tag}`} />
          ))}
        </div>
      )}
    </>
  );
};

export default TagsList;
