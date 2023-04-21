import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, } from 'react-native';
import { useEffect, useState } from "react";
import CustomFlatlist from './CustomFlatList';
import CustomHook from './CustomHook';


export default function App() {


  const {data} = CustomHook('https://fakestoreapi.com/products')


  return (

       <SafeAreaView style={styles.container}>

              <View style={styles.box}> 

                <CustomFlatlist Data ={data} />

              </View>

              {/* <View style={styles.box2}>

              </View> */}

       </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f8",
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection:"row",
    paddingVertical:20,
    paddingHorizontal:10,
  },

  box:{
    display:"flex",
    flex:1,
  },

  box1:{
     display:"flex",
     flex:0.5,
    //  backgroundColor:"green",
  },
  box2:{
    marginTop:30,
    display:"flex",
    flex:0.5,
    // backgroundColor:"red",
  }
});
