import React, { useState, useEffect } from "react";
import firebase from "./firebase";

export const FirebaseContext = React.createContext(null);

const FirebaseProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    return db.collection("employees").onSnapshot((snapshot) => {
      const data = [];
      console.log(snapshot);
      snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      console.log(data); // <------
      setEmployees(data);
    });
  }, []);

  return (
    <FirebaseContext.Provider value={{ employees: employees }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
