import React from 'react'
import {FirebaseContext} from '../Firebase/context'

function SelectedEmployeeInfo() {
  const {selectedEmployee} = React.useContext(FirebaseContext)
  console.log(selectedEmployee)
  return (
    <>
    <h2>LOOK HERE</h2>
    { selectedEmployee && <h1>{selectedEmployee.Name}</h1>}
    </>
  )
}

export default SelectedEmployeeInfo
