import { Tabs } from 'expo-router';
import { DashboardIcon, HomeIcon } from '../../../components/Icons';
import { View, Text } from 'react-native';

const Main = () => {
    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
            <Text className="text-lg text-black">Hello, Dashboard!</Text>
        </View>
    );
}

export default Main;