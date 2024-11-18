import { Drawer } from 'expo-router/drawer';

const TabsLayout = () => {
    return (
        <Drawer>
            <Drawer.Screen
                name="pages/dashboardContainer"
                options={{
                    title: 'Dashboard',
                }}
            />
        </Drawer>
    );
}

export default TabsLayout;