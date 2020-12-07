import React, { useState, useEffect } from "react";
import { Delete } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import useStyles from "./DynamicUserInputFields.styles";
import UserRaw from "../user-raw/UserRaw";
import config from "../../appConf";
import UserSearchBar from "../user-search-bar/UserSearchBar";

const rolesEnum = config.rolesEnum;

const DynamicUserInputFields = ({ group, setGroup }) => {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState(undefined);

  useEffect(() => {
    if (selectedUser) {
      setGroup((prevValue) => {
        return {
          ...prevValue,
          users: [
            ...prevValue.users,
            { ...selectedUser , role: rolesEnum.FRIEND },
          ],
        };
      });
    }
  }, [setGroup, selectedUser]);

  const handleRemoveUser = (index) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList.splice(index, 1);
      return { ...prevValue, users: usersList };
    });
  };

  const handleChangeRole = (index, newRole) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList[index].role = newRole;
      return { ...prevValue, users: usersList };
    });
  };

  const isAManager = (user) => {
    for (const groupUser of group.users) {
      if (user.id === groupUser.id && groupUser.role === rolesEnum.MANAGER) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <UserSearchBar setSelectedUser={setSelectedUser} />
      {group.users &&
        group.users.map((user, index) => (
          <div key={index} className={classes.field}>
            <UserRaw user={user} />
            <Button
              className={classes.iconButton}
              onClick={() => handleRemoveUser(index)}
            >
              <Delete />
            </Button>
            {isAManager(user) ? (
              <Button
                className={classes.button}
                onClick={() => handleChangeRole(index, rolesEnum.FRIEND)}
              >
                הסרה ממנהל
              </Button>
            ) : (
              <Button
                className={classes.button}
                onClick={() => handleChangeRole(index, rolesEnum.MANAGER)}
              >
                הפיכה למנהל
              </Button>
            )}
          </div>
        ))}
    </>
  );
};

export default DynamicUserInputFields;
