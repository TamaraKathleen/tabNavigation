import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../pages/home';
import { Dashboard } from '../pages/dashboard';
import { Profile } from '../pages/profile';
import { Search } from '../pages/search';

import { Feather } from "@expo/vector-icons"

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name='Home' component={Home}
                    options={{
                        headerTintColor:"#A9A9A9",
                        tabBarIcon: () => {
                            return <Feather name="home" size={25} color="#A9A9A9" />
                        },
                        tabBarActiveTintColor: 'cyan',
                        tabBarInactiveTintColor: 'gray',
                    }}
                />
                <Screen name='Dashboard' component={Dashboard}
                    options={{
                        headerTintColor:"#A9A9A9",
                        tabBarIcon: () => {
                            return <Feather name="airplay" size={25} color="#A9A9A9" />
                        },
                        tabBarActiveTintColor: 'orange',
                        tabBarInactiveTintColor: 'gray',
                    }}
                />
                <Screen name='Profile' component={Profile}
                    options={{
                        headerTintColor:"#A9A9A9",
                        tabBarIcon: () => {
                            return <Feather name="users" size={25} color="#A9A9A9" />
                        },
                        tabBarActiveTintColor: 'red',
                        tabBarInactiveTintColor: 'gray',
                    }}
                />
                <Screen name='Search' component={Search} 
                    options={{
                        headerTintColor:"#A9A9A9",
                        tabBarIcon: () => {
                            return <Feather name="search" size={25} color="#A9A9A9" />
                        },
                        tabBarActiveTintColor: 'blue',
                        tabBarInactiveTintColor: 'gray',
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}