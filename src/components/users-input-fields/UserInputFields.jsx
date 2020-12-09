import React, { useState, useEffect } from "react";
import { Delete } from "@material-ui/icons";
import { Button, Tooltip } from "@material-ui/core";
import useStyles from "./UserInputFields.styles";
import Scrollbar from "react-scrollbars-custom";
import UserRaw from "../user-raw/UserRaw";
import config from "../../appConf";
import { ReactComponent as RemoveManagerIcon } from "../../images/removeManagerIcon.svg";
import { ReactComponent as AddManagerIcon } from "../../images/addManagerIcon.svg";
import UserSearchBar from "../user-search-bar/UserSearchBar";

const rolesEnum = config.rolesEnum;

const UserInputFields = ({ group, setGroup }) => {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState(undefined);

  useEffect(() => {
    if (selectedUser) {
      setGroup((prevValue) => {
        return {
          ...prevValue,
          users: [
            ...prevValue.users,
            { ...selectedUser, role: rolesEnum.FRIEND },
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
      <div className={classes.fieldList}>
        <Scrollbar>
          {group.users &&
            group.users.map((user, index) => (
              <div key={index} className={classes.field}>
                <Tooltip title="מחיקה">
                  <Button
                    className={classes.iconButton}
                    onClick={() => handleRemoveUser(index)}
                  >
                    <Delete />
                  </Button>
                </Tooltip>
                {isAManager(user) ? (
                  <Tooltip title="הסרה ממנהל">
                    <RemoveManagerIcon
                      className={classes.iconButton}
                      onClick={() => handleChangeRole(index, rolesEnum.FRIEND)}
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title="הוספה למנהל">
                    <AddManagerIcon
                      className={classes.iconButton}
                      onClick={() => handleChangeRole(index, rolesEnum.MANAGER)}
                    />
                  </Tooltip>
                )}
                <UserRaw user={user} />
              </div>
            ))}
        </Scrollbar>
      </div>
    </>
  );
};

export default UserInputFields;
