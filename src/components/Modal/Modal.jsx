import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { FirebaseContext } from "../Firebase/context";
import EmployeeList from "./EmployeesList";

export default function MaxWidthDialog() {
  const { modal, closeModal } = React.useContext(FirebaseContext);
  const [searchParams, setSearchParams] = React.useState({
    location: "None",
    department: "None",
    searchInput: "",
  });

  const classes = useStyles();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <React.Fragment>
      <Dialog
        open={modal}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <form className={classes.form} noValidate>
            <div className={classes.formItem}>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                name="location"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchParams.location}
                onChange={handleChange}
              >
				  {/* Fix {Locations} */}
                <MenuItem value={"None"}>None</MenuItem>
                <MenuItem value={"new york"}>New York</MenuItem>
                <MenuItem value={"garden city"}>Garden City</MenuItem>
				<MenuItem value={"purchase"}>Purchase</MenuItem>
				<MenuItem value={"boston"}>Boston</MenuItem>
				<MenuItem value={"red bank"}>Red Bank</MenuItem>
				<MenuItem value={"chicago"}>Chicago</MenuItem>
				<MenuItem value={"san francisco"}>San Francisco</MenuItem>
				<MenuItem value={"los angeles"}>Los Angeles</MenuItem>
				<MenuItem value={"dallas"}>Dallas</MenuItem>
				<MenuItem value={"miami"}>Miami</MenuItem>
              </Select>
            </div>
            <div className={classes.formItem}>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                name="department"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchParams.department}
                onChange={handleChange}
              >
			{/* Broke this thing */}
                <MenuItem value={"None"}>None</MenuItem>
                <MenuItem value={"technology"}>Technology</MenuItem>
                <MenuItem value={"investment banking"}>Human Resources</MenuItem>
				<MenuItem value={"human resource"}>Technology</MenuItem>
                <MenuItem value={"research"}>Human Resources</MenuItem>
				<MenuItem value={"developer"}>Technology</MenuItem>
                <MenuItem value={"administration"}>Human Resources</MenuItem>
				<MenuItem value={"management"}>Technology</MenuItem>
                <MenuItem value={"accounting"}>Human Resources</MenuItem>
				<MenuItem value={"legal"}>Technology</MenuItem>
              </Select>
            </div>

			{/* Jason added another field */}
			<div className={classes.formItem}>
              <InputLabel id="demo-simple-select-label">Title</InputLabel>
              <Select
                name="title"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchParams.title}
                onChange={handleChange}
              >
                <MenuItem value={"None"}>None</MenuItem>
                <MenuItem value={"associate"}>Associate</MenuItem>
                <MenuItem value={"vice president"}>Vice President</MenuItem>
				<MenuItem value={"director"}>Director</MenuItem>

              </Select>
            </div>
          </form>
		  
		  
          <EmployeeList {...searchParams} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    width: "100%",
    justifyContent: "space-around",
  },
  formItem: {
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));
