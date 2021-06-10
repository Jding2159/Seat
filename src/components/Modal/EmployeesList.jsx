import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { FirebaseContext } from "../Firebase/context";
import Paper from "@material-ui/core/Paper";
import Employee from "./Employee";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const lowerCase = (word) => word.toLowerCase();

const Employees = ({ location, department, searchInput }) => {
  const classes = useStyles();
  const { employees } = useContext(FirebaseContext);

  const checkQuery = (person) => {
    if (
      lowerCase(location) !== lowerCase(person.Location) &&
      location !== "None"
    ) {
      return true;
    }

    if (
      lowerCase(department) !== lowerCase(person.Department) &&
      department !== "None"
    ) {
      return true;
    }

    return false;
  };

  return (
    <Paper
      elevation={0}
      style={{ minHeight: 600, maxHeight: 600, overflow: "auto" }}
    >
      <List className={classes.root}>
        {employees.map((person) => {
          if (checkQuery(person)) return null;
          return (
            <>
              <Employee person={person} />
            </>
          );
        })}
      </List>
    </Paper>
  );
};

export default Employees;
