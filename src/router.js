import React from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';


import Home from './pages/Home';
import Detail from './pages/Detail';
import Explore from './pages/explore';
import Messages from './pages/messages';
import Perfil from './pages/perfil';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Detail':
                            iconName = 'heart';
                            break;
                        case 'Explore':
                            iconName ='compass'
                            break;
                        case 'Messages':
                            iconName = 'message-circle';
                            break;
                        case 'Perfil':
                            iconName = 'user';
                            break;
                    }
                    return <Icon name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#0BC5EA',
                inactiveTintColor: '#000000',
                labelStyle: {fontSize: 12},
                style: { backgroundColor: '#ffffff'}
            }}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Detail" component={Detail}/>
            <Tab.Screen name="Explore" component={Explore}/>
            <Tab.Screen name="Messages" component={Messages}/>
            <Tab.Screen name="Perfil" component={Perfil}/>
        </Tab.Navigator>
    )
}

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                 name="home" 
                 component={Tabs}
                 options={{
                     title: '',
                     headerTitleStyle: {
                         backgroundColor: '#FFFFFF',
                         marginLeft: 15,
                     },
                     headerLeft: () => {
                         return(
                             <>
                            <Text style={{marginLeft: 15, fontWeight: 'bold', fontSize: 18, opacity: 0.9, }}>Olá, Lucas!</Text>
                            <Text style={{marginLeft: 15, marginTop: 5, fontSize: 16, marginBottom: 10 }}>Brasília - DF</Text>
                            </>
                         )
                     },
                     headerRight:  () => (
                         <Text style={{marginRight: 20, fontWeight: 'bold', fontSize: 18, opacity: 0.9}}>Lucas</Text>
                     )
                 }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;