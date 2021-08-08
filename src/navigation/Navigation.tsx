import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { RootStackNavigator } from '../types/types';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';

const Stack = createStackNavigator<RootStackNavigator>();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'white' }
            }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
