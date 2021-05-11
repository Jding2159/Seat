import React from 'react';
import EmployeesList from '../components/SimpleEmployeesList/SimpleEmployeeslist';
import MemoGardenCity from '../Offices/GardenCity';
import Drawer from '../components/Draw/Draw';
import styles from './styles/gardencity.module.scss';
import SelectedEmployeeInfo from '../components/EmployeeInfo/EmployeeInfo';
import DeskTable from '../components/DeskTable/Table';
import Modal from '../components/Modal/Modal';


const { page_flex, garden_city } = styles;

const GardenCity = () => {
	return (
		<div>
			<Modal />
			<div className={page_flex}>
				<div style={{ height: '100%', width: '100%' }}>
					<Drawer isOpen={true}>
						<EmployeesList />
						<SelectedEmployeeInfo />
					</Drawer>
				</div>

				<div className={garden_city}>
					<MemoGardenCity />
				</div>
				<div>
					<DeskTable />
				</div>
			</div>
		</div>
	);
};

export default GardenCity;
