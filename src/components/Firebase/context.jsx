import React, { useState, useEffect } from "react";
import firebase from "./firebase";

export const FirebaseContext = React.createContext(null);

const FirebaseProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [selectedDesks, setSelectedDesk] = useState([]);
  const [modal, setModal] = useState(false);

  const [editDeskId, setEditDeskid] = useState("");

  const openModal = (id) => {
    setModal(true);
    setEditDeskid(id);
  };

  const closeModal = () => {
    setModal(false);
    setEditDeskid("");
  };

  const handleSelectDesk = (deskId) => {
    const onlyDeskIds = selectedDesks.map((desk) => desk.deskId);
    if (onlyDeskIds.includes(deskId)) {
      const filteredDesks = selectedDesks.filter(
        (desk) => desk.deskId !== deskId
      );
      setSelectedDesk(filteredDesks);
      return;
    }

    const deskObj = { deskId: deskId, employee: null };
    setSelectedDesk([...selectedDesks, deskObj]);
  };

  const handleSelectEmployee = (id) => {
    const employeeMatch = employees.find((person) => person.id === id);
    console.log(employeeMatch);
    setSelectedEmployee(employeeMatch);
  };

  const EditEmployeeDesk = (id) => {
      const db = firebase.firestore();
      return db.collection("employees").onSnapshot((snapshot) => {
      const data = [];
      
      snapshot.forEach((doc) => {
        if(doc.id === id){
          console.log(doc.Desk)
          if( !doc.Desk ){
            console.log('rset success')
            db.collection('employees').doc(id).update({ Desk: ""})
          } else {
            console.log('create success')
            db.collection('employees').doc(id).update({ Desk: editDeskId})
          }
      

        } else {
          db.collection('employees').doc(doc.id).update({ Desk: ""})
        }
      });

      snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      setEmployees(data);
    
    });
  }

  useEffect(() => {
    const db = firebase.firestore();
    return db.collection("employees").onSnapshot((snapshot) => {
      const data = []; 
      snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      setEmployees(data);
    });
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        employees: employees,
        handleSelectEmployee: handleSelectEmployee,
        selectedEmployee: selectedEmployee,
        handleSelectDesk: handleSelectDesk,
        selectedDesks: selectedDesks,
        openModal: openModal,
        closeModal: closeModal,
        modal: modal,
        editDeskId: editDeskId,
        setEditDeskid: setEditDeskid,
        editEmployeeDesk: EditEmployeeDesk
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
