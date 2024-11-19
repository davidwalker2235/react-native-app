import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import Dashboard from '../../pages/Dashboard';
import DrawerModal from '../../components/drawerModal';
import { DashboardIcon, NavIcon } from '../../components/Icons';

const Tab = createBottomTabNavigator();
function TabsLayout() {
	const [isModalVisible, setModalVisible] = useState(false);

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<>
			<Tab.Navigator id={undefined}>
				<Tab.Screen
					name="Dashboard"
					component={Dashboard}
					options={{
						tabBarIcon: ({ color, size }) => (
							<DashboardIcon color={color} size={size} />
						),
					}}
				/>
				<Tab.Screen
					name="Menu"
					component={(()=> null)}
					options={{
						tabBarIcon: ({ color, size }) => (
							<TouchableOpacity onPress={openModal}>
								<NavIcon color={color} size={size} />
							</TouchableOpacity>
						),
					}}
				/>
			</Tab.Navigator>
			<DrawerModal isOpen={isModalVisible} onClose={closeModal} />
		</>
	);
}

export default TabsLayout;