import React, { StrictMode } from 'react';
import { Text, View } from 'react-native';
import '../global.css';
import Login from '../pages/Login';

const Index = () => {
    return (
        <StrictMode>
            <View className="flex-1 justify-center items-center p-1">
                <Login />
            </View>
        </StrictMode>
    );
};

export default Index;