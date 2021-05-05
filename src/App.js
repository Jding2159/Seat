import React from 'react';
import './App.css';
import GardenCity from './pages/GardenCity'
import { FirebaseContext } from './components/Firebase/context';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function App() {
	const { employees } = React.useContext(FirebaseContext);
	console.log(employees);

	return (
		<BrowserRouter>
			<Route exact path="/">
				<GardenCity />
			</Route>
		</BrowserRouter>
	);
}

export default App;
