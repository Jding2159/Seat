import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from './TableHead'
import Row from './Row'



import {FirebaseContext} from '../Firebase/context'








const CollapsibleTable =() => {
  const {selectedDesks} = React.useContext(FirebaseContext) 


  console.log(selectedDesks, 'hiii')
  

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
    <TableHead/>
        <TableBody>
          {selectedDesks.map((desk,i) => (
            // <div>{desk}</div>
            <Row key={desk.deskId +i} desk={desk} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default CollapsibleTable 