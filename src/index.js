import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
// import Firebase, { FirebaseContext } from './components/Firebase'



firebase.initializeApp({
  apiKey: "AIzaSyByOvy3GilkXhAuB7CX360lVwN1sF30yiw",
  authDomain: "seatingchart-44af3.firebaseapp.com",
  projectId: "seatingchart-44af3",
  storageBucket: "seatingchart-44af3.appspot.com",
  messagingSenderId: "573352239835",
  appId: "1:573352239835:web:751d917d61e9a323a822fe"
  })

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <FirebaseContext.Provider value={new Firebase()}></FirebaseContext.Provider>  */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
