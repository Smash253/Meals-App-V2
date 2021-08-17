import React from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';


const CategoryGridTyle = props => {
    return(
    <TouchableOpacity style={styles.gridItem}
        activeOpacity = {.9}
        onPress={props.onSelect}>
        <View style={{...styles.container,...{backgroundColor: props.color}}}>
            <Text style={styles.title} numberOfLines={2}>
            {props.title}
            </Text>
        </View>
    </TouchableOpacity>);
    
};

const styles= StyleSheet.create({
    gridItem: {
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:'hidden',
        elevation:12,
      },

    container: {
        flex:1, 
        borderRadius:15,
        shadowColor:"black",
        elevation: 12,
        padding:10,
        justifyContent:"flex-end",
        alignItems:'flex-end',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        
        
    },
    title: {
        fontSize:22,
    }
});



export default CategoryGridTyle;