import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';
import { View, Text} from 'react-native'

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createStackNavigator();


function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                 name="home" 
                 component={Home}
                 options={{
                     title: '',
                     headerTitleStyle: {
                         fontFamily: 'Montserrat_700Bold',
                     },
                     headerLeft: () => (
                        <Text>Olá, Lucas!</Text>
                     )
                 }}
                 />
                <Stack.Screen
                 name="detail"
                component={Detail}
                options={{
                    title: 'DESCANSO',
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold',
                    },
                    headerRight: () => (
                       <TouchableOpacity>
                           <Ionicons 
                           name="airplane" 
                           size={30} 
                           color="#0BC5EA" 
                           style={{marginRight: 25}} 
                           />
                       </TouchableOpacity>
                    )
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;