import React from 'react';
import EmployeesList from '../components/EmployeesList/Employeeslist';
import MemoGardenCity from '../Offices/GardenCity';
import Drawer from '../components/Draw/Draw';
import styles from './styles/gardencity.module.scss';

const { page_flex, employees_list, garden_city } = styles;
const GardenCity = () => {
	return (
		<div className={page_flex}>
			<div style={{height: '100%', width: "100%"}}>
				<Drawer isOpen={true}>
					<EmployeesList />
				</Drawer>
			</div>

				<div className={garden_city}>
					<MemoGardenCity />
				</div>
		</div>
	);
};

export default GardenCity;
