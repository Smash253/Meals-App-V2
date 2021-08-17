import React from 'react';
import {StyleSheet,FlatList, View, Button,Text} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTyle from '../components/CategoryGridTile';

export default function CategoriesScreen ({navigation}) 

{
  const renderGridItem = (itemData) => {
    return <CategoryGridTyle 
    title={itemData.item.title} 
    color={itemData.item.color} 
    onSelect={() => navigation.navigate('CategoryScreen', { categoryID: itemData.item.id, title: itemData.item.title })} /> ;
    
  };
  
    
  
  return (
  
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    
    
  );
  
};


