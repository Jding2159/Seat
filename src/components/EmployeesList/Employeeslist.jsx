import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { FirebaseContext } from "../Firebase/context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    overflow: "auto",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  const { employees } = useContext(FirebaseContext);

  console.log(employees);

  return (
    <List className={classes.root} subheader={<li />}>
            {employees.map((item) => (
              <ListItem key={"item" + item.id}>
                <ListItemText primary={`Item ${item.Name}`} />
              </ListItem>
            ))}
    </List>
  );
}
