import React from 'react';
import firebase from './firebase'

export const FirebaseContext = React.createContext(null)

const FirebaseProvider = ({children}) => {

  const employees = () => {
   
    let arr
    
      firebase.firestore().collection('employees').onSnapshot(querySnapShot => {

     const arrOfEmployees = querySnapShot.docs.map(doc => {
        return doc.data()
      })

      return arrOfEmployees
    })

   return arr
  }
  



  return (
    <FirebaseContext.Provider value={{employees: employees}}>
      {children}
    </FirebaseContext.Provider>

  )
}



export default FirebaseProvider