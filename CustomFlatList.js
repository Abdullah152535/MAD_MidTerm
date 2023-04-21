import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";


export default function CustomFlatlist (props){



   return(

    <FlatList
        data={props.Data}
        keyExtractor={item => item.id+1}
        horizontal={false}
        numColumns={2}
        renderItem={({item})=> <Element Item={item}/> }  
      />
    )
}

    const Element = ({Item}) => {

        const boxstyling = (Item.id%2)==0 ? styles.mainBox2:styles.mainBox1;
        
      return (

        <TouchableOpacity>
            <View style={boxstyling}>
  
                <View style={styles.image}>
                <Image
                source={{ uri: Item.image }}
                style={styles.pic}
               />
                </View>
  
                <View style={styles.detail}>
  
               <View style={styles.title}>
               <Text style={{ textAlign:"center"}} >
                    {Item.title}
                </Text>
               </View>
  
              <View style={styles.price}>
              <Text >
                    {`$${Item.price}`}
                </Text>
              </View>
  
               <View>
               <TouchableOpacity style={styles.BuyNow}>
                    <Text style={{fontSize:20}}>
                        Buy Now
                    </Text>
                </TouchableOpacity>
               </View>
                </View>
  
            </View>
        </TouchableOpacity>
      );
    }
      
   

const styles = StyleSheet.create({
   
    mainBox1:{
        display:"flex",
        height:400,
        width:190,
        backgroundColor:"white",
        margin:3,
    },
    mainBox2:{
        display:"flex",
        height:400,
        width:190,
        backgroundColor:"white",
        margin:3,
        marginTop:30
    },
    image:{
        display:"flex",
        flex:0.6,
        // backgroundColor:"pink",
    },
    detail:{
        flex:0.4,
       
    },
    pic:{
          marginVertical:10,
          marginHorizontal:20,
          width: "80%", 
          height: "90%" 
    },
    title:{
        // backgroundColor:"pink",
        height:50,
        justifyContent:"center",
        alignItems:"center",
       
    },
    price:{
        // backgroundColor:"white",
        height:40,
        justifyContent:"center",
        alignItems:"center"
    },
    BuyNow:{
        justifyContent:"center",
        alignItems:"center",
    }
  });
  