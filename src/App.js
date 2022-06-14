import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Router from './config/Router';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const globalState = {
    totalUser : 0
}

//reducer
const rootReducer = (state = globalState, action) => {
  switch(action.type){
    case 'ADD_USER' :
        return{
            ...state,
            totalUser : state.totalUser + 1
        }
    case 'REMOVE_USER' :
        return{
            ...state,
            totalUser : state.totalUser + 1
        }
    default : return state;
  }
}

//Store
const storeRedux = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={storeRedux}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
