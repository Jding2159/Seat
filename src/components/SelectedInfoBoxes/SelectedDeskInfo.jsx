import React from 'react'
import {FirebaseContext} from '../Firebase/context'

function SelectedDeskInfo() {
  const {selectedDesks} = React.useContext(FirebaseContext)
  return (
    <>
      <h2>LOOK HERE Desk</h2>
      {
        selectedDesks.map(desk => {
          return (
            <div>
              {desk}
              <div>click to add employee</div>

            </div>

          )
        })
      }
    </>
  )
}

export default SelectedDeskInfo
