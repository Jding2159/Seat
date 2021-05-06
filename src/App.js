import React from 'react';
import './App.css';
import GardenCity from './pages/GardenCity'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nav from './Navbar/Nav'

function App() {


	return (
		<BrowserRouter>
			<Nav/>
			<Route exact path="/">
				<GardenCity />
			</Route>
		</BrowserRouter>
	);
}

export default App;
