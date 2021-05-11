import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { FirebaseContext } from '../Firebase/context';
import EmployeeList from '../SimpleEmployeesList/SimpleEmployeeslist';

export default function MaxWidthDialog() {
	const { modal, closeModal, employees } = React.useContext(FirebaseContext);
    const [department, setDepartment] = React.useState("")
	const classes = useStyles();

    const handleChange = (e) => {
        const value = e.target.value;
        setDepartment(value)
    }

	const handleClose = () => {
		closeModal();
	};

	return (
		<React.Fragment>
			<Dialog open={modal} onClose={handleClose} aria-labelledby="max-width-dialog-title">
				<DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
				<DialogContent>
					<DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
					<form className={classes.form} noValidate>
                        {/* city filter
                        ohio
                        newyork */}
                        {/* searhbar by name */}
                        
						<InputLabel id="demo-simple-select-label">Department</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={department}
							onChange={handleChange}
						>
						
							<MenuItem value={'technology'}>Technology</MenuItem>
							<MenuItem value={'human resources'}>Human Resources</MenuItem>

						</Select>
					</form>

					<EmployeeList />
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
		display: 'flex',
		flexDirection: 'column',
		margin: 'auto',
		width: 'fit-content'
	},
	formControl: {
		marginTop: theme.spacing(2),
		minWidth: 120
	},
	formControlLabel: {
		marginTop: theme.spacing(1)
	}
}));
