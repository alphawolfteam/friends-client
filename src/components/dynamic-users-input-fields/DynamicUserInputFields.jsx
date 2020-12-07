import React from "react";
import { Delete, Add } from "@material-ui/icons";
import { Button, Input } from "@material-ui/core";
import useStyles from "./DynamicUserInputFields.styles";

const DynamicUserInputFields = ({ object, setObject }) => {
  const classes = useStyles();

  const handleFieldChange = (event, index) => {
    const target = event.target;
    const value = target.value === "" ? undefined : target.value;
    const values = [...object.users];
    values[index] = { ...values[index], id: value };
    setObject({ ...object, users: values });
  };

  const handleAddFields = () => {
    const values = object.users ? [...object.users] : [];
    values.push({ id: undefined });
    setObject({ ...object, users: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...object.users];
    values.splice(index, 1);
    setObject({ ...object, users: values });
  };

  return (
    <>
      <Button className={classes.button} onClick={() => handleAddFields()}>
        <Add />
      </Button>
      {object.users &&
        object.users.map((user, index) => (
          <div key={index} className={classes.field}>
            <Input
              dir="rtl"
              className={classes.textBox}
              onChange={(event) => handleFieldChange(event, index)}
              value={user.id}
            />
            <Button
              className={classes.button}
              onClick={() => handleRemoveFields(index)}
            >
              <Delete />
            </Button>
          </div>
        ))}
    </>
  );
};

export default DynamicUserInputFields;
