import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import {FirebaseContext} from '../../components/Firebase/context'



const Collapsible = ({open}) => {

   const {openModal} = React.useContext(FirebaseContext)

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
                <Button  variant="outlined" color="primary" onClick={openModal}>Add Employee</Button>
            </Box>
        </Collapse>
    )
}


export default Collapsible


// const Collapsible = () => {
//   return (
//      <Collapse in={open} timeout="auto" unmountOnExit>
// {/* <Box margin={1}> */}

    
//       <Button >hi</Button>
// {/* </Box> */}
// </Collapse> 
//     </>
//   )
// }
