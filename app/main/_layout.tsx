import { Tabs } from 'expo-router';
import { DashboardIcon, HomeIcon } from '../../components/Icons';

const TabsLayout = () => {
    return <Tabs>
        <Tabs.Screen
            name="dashboardContainer"
            options={{
                title: 'Dashboard',
                tabBarIcon: ({color}) => <DashboardIcon color={color} />,
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
                title: 'About',
                tabBarIcon: ({color}) => <HomeIcon color={color} />,
            }}
        />
    </Tabs>;
}

export default TabsLayout;