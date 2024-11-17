import React, { useState } from 'react';
import { Pressable, TextInput, Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <SafeAreaView className="flex-1 justify-center items-center p-1">
            <Text className="mb-2">Username</Text>
            <TextInput
                className="h-10 w-[80vw] border border-gray-400 mb-4 px-2"
                placeholder="Enter username"
                value={username}
                onChangeText={setUsername}
            />
            <Text className="mb-2">Password</Text>
            <TextInput
                className="h-10 w-[80vw] border border-gray-400 mb-4 px-2"
                placeholder="Enter password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable
                className="p-4 bg-blue-700 dark:bg-black w-[80vw] items-center active:bg-red-800"
                onPress={handleLogin}
            >
                <Text className="text-white">
                    Login
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Login;