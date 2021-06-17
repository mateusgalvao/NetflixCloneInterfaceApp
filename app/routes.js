import React from 'react';
import {Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


import Login from './pages/Login';
import Home from './pages/Home';
import Filmes from './pages/Filmes';
import PaFake from './pages/PagFake';



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        shifting={false}
        activeColor={'#fff'}
        barStyle={{backgroundColor:'#141414'}}
        
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel:'inicio',
                tabBarIcon: ({color}) => 
                <Icons name="home" color={color} size={26}></Icons>
                
            }}
            />
            <Tab.Screen 
            name="Buscar" 
            component={Home}
            options={{
                tabBarLabel:'Buscar',
                tabBarIcon: ({color}) => 
                <Icons name="magnify" color={color} size={26}></Icons>
                
            }}
            />
            <Tab.Screen 
            name="Em breve" 
            component={Home}
            options={{
                tabBarLabel:'Em breve',
                tabBarIcon: ({color}) => 
                <Icons name="play-speed" color={color} size={26}></Icons>
                
            }}
            />
            <Tab.Screen 
            name="Downloads" 
            component={Home}
            options={{
                tabBarLabel:'Downloads',
                tabBarIcon: ({color}) => 
                <Icons name="download" color={color} size={26}></Icons>
                
            }}
            /><Tab.Screen 
            name="Mais" 
            component={PaFake}
            options={{
                tabBarLabel:'MAis',
                tabBarIcon: ({color}) => 
                <Icons name="menu" color={color} size={26}></Icons>
                
            }}
            />
    </Tab.Navigator>
    );
    
};

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
            options={{headerShown: false}}
                name="Login"
                component={Login}
                />
            <Stack.Screen
            options={{headerShown: false}}
                name="Home"
                component={HomeTabs}
                />
            <Stack.Screen
            options={{headerShown: false}}
                name="Filmes"
                component={Filmes}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;