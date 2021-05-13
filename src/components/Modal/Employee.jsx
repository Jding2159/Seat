import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
    marginRight: "10px",
  },
}));

function Employee({ person }) {
  const classes = useStyles();
  const isSelected = true;
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={person.Name} src={person.Image} />
        </ListItemAvatar>
        <ListItemText
          primary={person.Name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {person.Department}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {person.Location}
              </Typography>
            </React.Fragment>
          }
        />
        <IconButton>
          {isSelected ? <CheckCircleIcon /> : <AddCircleIcon />}
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default Employee;
