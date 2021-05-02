import React, { Component } from 'react';
import './App.css';
import MemoGardenCity from './Offices/GardenCity.jsx';
import { FirebaseContext } from './components/Firebase';
import firebase from 'firebase'

function App() {
	// useEffect(() => {
	//   db.collection("employees").get().then((querySnapshot) => {
	//     querySnapshot.forEach((doc) => {
	//         // doc.data() is never undefined for query doc snapshots
	//         console.log(doc.id, " => ", doc.data());
	//     });
	// });
	// })
  const firebaseapp = firebase.firestore().collection('employees').onSnapshot(querySnapShot => {
    querySnapShot.docs.map(doc => {
      console.log(doc.data())
    })
  })
  console.log(firebaseapp)
	return (
		// <FirebaseContext.Consumer>
    //   {(firebase => {
    //     (firebase.employees().on('value', snapshot => {
    //       console.log(snapshot.val())
    //     }))
    //     return (
    //       <div>
    //         Hello World!
    //       </div>
    //     )
    //   })}
		  <div className="App">
				<MemoGardenCity />
			</div>
		// </FirebaseContext.Consumer>
	);
}

export default App;
