import React, { useContext, useState } from "react";
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
import { FirebaseContext } from "../Firebase/context";

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

// Need to fix tooltip

function Employee({ person }) {
  const classes = useStyles();
  const [isSelected, setIsSelected] = useState(false);
  const { editEmployeeDesk, editDeskId } = useContext(FirebaseContext);

  React.useEffect(() => {
    if (person.Desk === editDeskId) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [person, editDeskId]);

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={person.Name} src={person.Image} />
        </ListItemAvatar>
        <ListItemText
          primary={person.FullName}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {`Department : ` + person.Department}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {`Location : ` + person.Location}
              </Typography>
            </React.Fragment>
          }
        />
        <IconButton onClick={() => editEmployeeDesk(person.id)}>
          {isSelected ? <CheckCircleIcon /> : <AddCircleIcon />}
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default Employee;
