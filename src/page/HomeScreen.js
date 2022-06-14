import React,{useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View,TextInput,RefreshControl,FlatList,TouchableOpacity, Image } from 'react-native'
import {dummyData} from '../config/Data'
import {useNavigation} from '@react-navigation/native'
import barcode from '../assets/image/barcode.png'
import axios from 'axios'

const HomeScreen = () => {
    const [refresStatus, setRefresStatus] = useState(false)
    const [eventData, setEventData] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        let axiosConfig = {
            headers : {
                "Accept" : "application/json",
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "application/json"
            }
        }

        axios.get('https://62a87242ec36bf40bda5f58c.mockapi.io/rest-api/event',axiosConfig)
        .then(res => {
            console.warn(res);
            setEventData(res)
        })
        .catch(err => {
            console.log(err);
        });
    }, [])

    function dataCore(){
        // AsyncStorage.getItem('user', (error, result) => {
        //     if (result) {
        //         let dataUser = JSON.parse(result)               
        //         let params = {user_id : dataUser.user_id}
        //         // console.warn(params)
        //         transactionHistory_POST(params).then((data) => {
        //             let status = data.status
        //             if(status==='OK'){
        //             setAllData(data.data)                      
        //             setLoadData(true)
        //             }
        //         })                

        //     }
        // })
        
        setRefresStatus(false)
    }

    function onRefresh(){
        setRefresStatus(true)
        dataCore()
    }

    const EmptyListMessage = () => {
        return (
            <View>
                <Text style={styles.emptyListStyle}>
                    Data Tidak Ditemukan
                </Text>
            </View>
        );
    };

    function _onclick(arg){
        navigation.navigate("DetailEvent",{idEvent: arg})
    }

    return (

            <View style={styles.container}>
                <SafeAreaView style={{flex:1}}>
                    <View style={{flex:1}}>
                        <View style={{backgroundColor:'white',borderRadius:10,marginHorizontal:40}}>
                            <View style={{flexDirection:'row',padding:5,height:45,alignItems:'center'}}>
                                <TextInput style={{flex:1}} placeholder="Search"/>
                                {/* <MaterialCommunityIcons name="magnify" size={25}/> */}
                            </View>
                        </View>
                        <View style={{flex:1,marginTop:10}}>
                            {/* {console.log(dummyData)} */}
                            <FlatList
                                data={eventData.data}
                                keyExtractor={item => item.id}
                                refreshControl={
                                    <RefreshControl refreshing={refresStatus} onRefresh={onRefresh} />
                                }
                                style={{ flex: 1,}}
                                ListEmptyComponent={EmptyListMessage}
                                renderItem={({item}) => 
                                <View style={{flex:1, marginHorizontal:30}}>
                                {
                                <TouchableOpacity style={{marginTop:20}} onPress={() => _onclick(item.id)}>
                                    <View
                                        colors={'55caf0'}
                                        style={styles.container}
                                    >
                                        <View style={styles.card_top}>
                                            <View style={{backgroundColor:'#e64d40',marginTop:10}}>
                                                <View style={{justifyContent:'space-between',flexDirection:'row',paddingHorizontal:30,paddingVertical:10}}>
                                                    <Text style={{color:'white',fontWeight:'bold'}}>SEMINAR</Text>
                                                    <Text style={{color:'white',fontWeight:'bold'}}>TICKET</Text>
                                                </View>
                                            </View>
                                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5,paddingVertical:5}}>
                                                <Text style={{textAlignVertical:'center'}}>{item.createdAt}</Text>
                                                <Image source={barcode} style={{flex:1,width:100,height:35}}/>
                                            </View>

                                        </View>
                                        <View style={styles.card}>
                                        <View style={{paddingHorizontal:20}}>
                                            <View style={{paddingTop:10}}>
                                                <Text style={{color:'#8996c2'}}>{item.name}</Text>
                                            </View>
                                            <View style={{justifyContent:'space-between',flexDirection:'row'}}> 
                                                <Text style={{color:'gray',fontSize:16}}>{item.detail}</Text>
                                            </View>
                                            
                                        </View>
                                        <View style={{paddingHorizontal:20,marginVertical:10,flexDirection:'row',justifyContent:'space-between'}}> 
                                            <View>
                                                <Text style={{color:'gray'}}>{item.publisher}</Text>
                                                <Text style={{color:'gray'}}>{item.createdAt}</Text>
                                            </View>
                                            <View>
                                                <Text style={{color:'gray'}}>{item.user}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    </View>
                                </TouchableOpacity>
                                }
                                </View>
                            }/>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#fff', 
        width: '100%', 
        flexDirection: 'row', 
        height: 60,
        borderBottomWidth: 0.5,
        borderColor: '#999',
    },
    textHeaderMenu: {
        color:'#fff',
        fontSize: 20,
      },
    container: {
        flex: 1,
        borderRadius:15
    },
    info: {
        width: '39%', 
        alignItems: 'center', 
        flexDirection: 'row'
    },
    topHeader:{
      backgroundColor: '#f14e23', 
      width: '100%', 
      flexDirection: 'row', 
      height: 50,
      borderBottomWidth: 0.5,
      borderColor: '#999'
    },
    emptyListStyle: {
        fontSize: 18,
        color: 'grey',
        textAlign: 'center',
    },
    card:{
        borderRadius:15,
        backgroundColor:'white',
        shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.15,
        // shadowRadius: 3,
        elevation: 2,
    },

    card_top:{
        backgroundColor:'white',
        borderRadius:10,
        shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.15,
        // shadowRadius: 3,
        elevation: 2,
    }
}
)
