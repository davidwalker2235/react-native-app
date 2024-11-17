import React from 'react';
import { Text, View } from 'react-native';
import Login from '../components/Login';
import '../global.css';

const Index = () => {
    return (
        <View className="flex-1 justify-center items-center p-1">
            <Login />
        </View>
    );
};

export default Index;