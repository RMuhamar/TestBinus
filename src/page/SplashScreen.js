import React,{useEffect} from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import Logo from '../assets/image/logo.png'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000 )
    }, [navigation])

    return (
        <View style={styles.background}>
            <Image source={Logo} style={styles.logo}/>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo:{
        width: '100%',
        height: '100%', 
    }
})