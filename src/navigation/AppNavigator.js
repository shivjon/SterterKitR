import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen  from "../screens/RegistrationScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { State } from 'react-native-gesture-handler';
const Stack = createStackNavigator();
// const isUserVerified = useSelector(state => state.auth.isUserVerified);
// const isLoggedIn = useSelector(state => state.auth.user.token);

export const  LoginStack =()=> {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerMode='none'
        >
           
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
           
        </Stack.Navigator>
    )
}

// export const HomeStack = () =>{
//     return(
//         <Stack.Navigator
//             initialRouteName="Home"
//             // headerMode='none'
//         >
//             <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
           
        
//         </Stack.Navigator>
//     )
// }


 export const  AppNavigator = (props) => {
    // const { state} = props; 
    return (
        <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    headerMode='none'
                >
                    <Stack.Screen name='Login' component={LoginStack} />
                    {/* <Stack.Screen name='Home' component={HomeStack} /> */}
                </Stack.Navigator> 
        </NavigationContainer>
    )
}

export default AppNavigator;