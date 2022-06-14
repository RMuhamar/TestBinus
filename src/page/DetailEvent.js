import React,{useEffect, useState,useProps} from 'react'
import { StyleSheet, Text, View,Dimensions,Image, ScrollView, TouchableOpacity } from 'react-native'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'


 const DetailEvent = ({route}) => {
    const {idEvent} = route.params
    const notes = useSelector(state => state)
    const dispatch = useDispatch()
    const [id, setid] = useState("")
    const [judul, setJudul] = useState("")
    const [isi, setIsi] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [publisher, setPublisher] = useState("")
    const [images, setimage] = useState("")
    const navigation = useNavigation();

    useEffect(() => {
        let axiosConfig = {
            headers : {
                "Accept" : "application/json",
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json"
            }
        }

        axios.get('https://62a87242ec36bf40bda5f58c.mockapi.io/rest-api/event?id='+idEvent,axiosConfig)
        .then(res => {
            console.warn(res.data[0].name);
            setid(res.data[0].id)
            setJudul(res.data[0].name)
            setIsi(res.data[0].detail)
            setTanggal(res.data[0].createdAt)
            setPublisher(res.data[0].publisher)
            setimage(res.data[0].image)
        })
        .catch(err => {
            console.log(err);
        });
    }, [])

     function onclick(){
        //  dispatch({type:'ADD_USER'})
        navigation.navigate('Registration',{idEvent: id})
     }

    return (
        <ScrollView style={{backgroundColor:'#f7f7f7'}}>
            {console.warn(notes)}
            <View style={{backgroundColor:'white',marginTop:20},styles.shadow}>
                <View style={styles.shadow,{marginTop:20,height:Dimensions.get('window').height / 4}}>
                    <Image source={{uri: images}} style={{flex:1,paddingHorizontal:20}}/>
                </View>
                <View style={{justifyContent:'space-between',flexDirection:'row', marginTop:20, marginHorizontal:20,flexWrap:'wrap',flex:1}}>
                    <Text style={{color:'gray'}}>{tanggal}</Text>
                    <Text style={{color:'gray'}}>{publisher}</Text>
                </View>

                <Text style={{marginTop:20,alignSelf:'center',fontSize:20,fontWeight:'bold'}}>{judul}</Text>

                <View style={{marginHorizontal:20,marginTop:20}}>
                    <Text style={{color:'gray',marginBottom:20}}>
                        Deskripsi
                    </Text>
                    <Text>
                        {isi}
                    </Text>
                    <Text>{notes.totalUser}</Text>
                </View>

                <View style={{marginHorizontal:20,marginTop:20}}>
                    <Text style={{color:'gray',marginBottom:20}}>
                        Alamat
                    </Text>
                    <Text>
                        {isi}
                    </Text>
                    <Text>{notes.address}</Text>
                </View>

                <TouchableOpacity onPress={onclick} style={{marginTop:20,marginHorizontal:20,paddingBottom:20}}>
                    <View style={{height:45,backgroundColor:'#67112f',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white'}}>D A F T A R</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    )
}

export default DetailEvent;

const styles = StyleSheet.create({
    shadow:{
        marginHorizontal:20,
        backgroundColor:'white',
        flex:1,
        shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.15,
        // shadowRadius: 3,
        elevation: 2,
    }
})
