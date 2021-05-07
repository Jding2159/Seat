import React from 'react'
import {FirebaseContext} from '../Firebase/context'

function SelectedDeskInfo() {
  const {selectedDesk} = React.useContext(FirebaseContext)
  return (
    <>
      <h2>LOOK HERE Desk</h2>
     { selectedDesk && <h1>{selectedDesk}</h1>}
    </>
  )
}

export default SelectedDeskInfo
