import React, { useState, useEffect } from "react";
import firebase from "./firebase";

export const FirebaseContext = React.createContext(null);

const FirebaseProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [selectedDesks, setSelectedDesk] = useState([]);
  const [modal, setModal] = useState(false);
  const [editDeskId, setEditDeskid] = useState("");

  const [seats, setSeats] = useState({
    GC1F_1: "",
    GC1F_2: "",
    GC1F_3: "",
    GC1F_4: "",
    GC1F_5: "",
    GC1F_6: "",
    GC1F_7: "",
    GC1F_8: "",
    GC1F_9: "",
    GC1F_10: "",
    GC1F_11: "",
    GC1F_12: "",
    GC1F_13: "",
    GC1F_14: "",
    GC1F_15: "",
    GC1F_16: "",
    GC1F_17: "",
    GC1F_18: "",
  });

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

  const EditEmployeeDesk = async (id) => {
    const db = firebase.firestore();
    const employee = await (
      await db.collection("employees").doc(id).get()
    ).data();
    if (employee.Desk === "" || employee.Desk !== editDeskId) {
      await db
        .collection("employees")
        .doc(id)
        .set({ ...employee, Desk: editDeskId });
    } else {
      await db
        .collection("employees")
        .doc(id)
        .set({ ...employee, Desk: "editDeskId" });
    }

    //Find person who may be assigned to the desk that we are reassigning
    const collection = await db.collection("employees").get();
    collection.forEach((doc) => {
      const employee = doc.data();
      // if its not the same person that we have reassigned to the desk
      // then lets remove the other person
      if (doc.id !== id && employee.Desk === editDeskId) {
        doc.ref.update({
          Desk: "",
        });
      }
    });
  };

  const getEmployees = () => {
    const db = firebase.firestore();
    return db.collection("employees").onSnapshot((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      setEmployees(data);
    });
  };

  useEffect(() => {
    getEmployees();
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
        editEmployeeDesk: EditEmployeeDesk,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
