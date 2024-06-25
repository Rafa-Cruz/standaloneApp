import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer (props) { 
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );  
}