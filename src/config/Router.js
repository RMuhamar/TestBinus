import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../page/SplashScreen'
import HomeScreen from '../page/HomeScreen'
import DetailEvent from '../page/DetailEvent'
import Registration from '../page/Registration'

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false}}/>
            <Stack.Screen name="DetailEvent" component={DetailEvent} options={{ headerShown:true}}/>
            <Stack.Screen name="Registration" component={Registration} options={{ headerShown:true}}/>
        </Stack.Navigator>
        
    )
}

export default Router

const styles = StyleSheet.create({})
