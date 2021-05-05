import React, { Component } from 'react';
import EmployeesList from '../components/EmployeesList/Employeeslist';
import MemoGardenCity from '../Offices/GardenCity';
import styles from './styles/gardencity.module.scss';

const { page_flex, employees_list, garden_city } = styles;
const GardenCity = () => {
	return (
		<div className={page_flex}>
			<div className={garden_city}>
				<MemoGardenCity />
			</div>
            <div className={employees_list}>
				<EmployeesList />
			</div>
		</div>
	);
};

export default GardenCity;
