import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

export default function MealList  (props)  {
    const renderMealItem = (itemData) => {
      //console.log(itemData.item.ingredients);
      return (
        <MealItem
          title={itemData.item.title}
          image={itemData.item.imageUrl}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          //ingredients = {itemData.item.ingredients}
          onSelectMeal={() => {
            props.navigation.navigate('MealDetail',
             { 
               selectedMeal: itemData.item
              //  categoryID: itemData.item.id,
              //  title: itemData.item.title 
              })
          }}
        />
      );
    };
  
    return (
      <View style={styles.list}>
        <FlatList
          data={props.listData}
          keyExtractor={(item, index) => item.id}
          renderItem={renderMealItem}
          style={{ width: '100%' }}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    list: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15
    }
  });