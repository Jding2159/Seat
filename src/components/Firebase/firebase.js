import app from "firebase/app"
import "firebase/database"


const config = {
    apiKey: "AIzaSyByOvy3GilkXhAuB7CX360lVwN1sF30yiw",
    authDomain: "seatingchart-44af3.firebaseapp.com",
    projectId: "seatingchart-44af3",
    storageBucket: "seatingchart-44af3.appspot.com",
    messagingSenderId: "573352239835",
    appId: "1:573352239835:web:751d917d61e9a323a822fe"
    };

class Firebase {
    constructor(){
        app.initializeApp(config)
        this.db = app.database()
    }

    employees = () =>  this.db.ref('employees')
}

export default Firebase
