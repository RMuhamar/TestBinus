import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'

const Registration = ({route}) => {
    const {id} = route.params
    const [nik, setNik] = useState("")
    const [nama, setNama] = useState("")
    const navigation = useNavigation();

    function onclick(){
        let id_event = id
        let nik = nik
        let nama = nama

        let body = {id_event,nik,nama}
        let axiosConfig = {
            headers : {
                "Accept" : "application/json",
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json"
            }
        }

        axios.post('https://62a87242ec36bf40bda5f58c.mockapi.io/rest-api/peserta',body)
        .then(res => {
            navigation.navigate('Home')
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <View style={{flex:1}}>
            <View style={styles.contentForm}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Profile
                </Text>
            </View>
            <Text style={{}}></Text>
            <View style={styles.viewContent}>
                <View style={styles.viewBackground}>
                  <Text style={styles.textLabel}>Nomor Induk</Text>
                  <TextInput placeholder='Nik' style={styles.textInput} onChangeText={param => setNik(param)}></TextInput>
                </View>
            </View>
            <View style={styles.viewContent}>
                <View style={styles.viewBackground}>
                  <Text style={styles.textLabel}>Nama Lengkap</Text>
                  <TextInput placeholder='Nik' style={styles.textInput} onChangeText={param => setNama(param)}></TextInput>
                </View>
            </View>
            <TouchableOpacity onPress={onclick} style={{marginTop:20,marginHorizontal:20,}}>
                    <View style={{height:45,backgroundColor:'#67112f',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white'}}>D A F T A R</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default Registration

const styles = StyleSheet.create({
    contentForm: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40,
        marginTop:20
      },
      viewContent: {
        padding:5,
        margin:15,
        marginTop:5,
        borderRadius: 50/9, 
      },
      viewBackground: {
        paddingLeft: 10,
        paddingRight: 10,
        height:50
      },
      textInput: {
        textAlign:'left',
        fontSize: 14,
        height:45,
        paddingLeft:15,
        paddingRight:15,
        color: "#000",
        backgroundColor:"#fff", 
        borderRadius: 90/9,
        borderWidth:1,
        borderColor:'#bdc3c7',
      },
})
