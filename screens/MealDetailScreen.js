import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

export default function MealDetailScreen  (props) {

  
  const selectedMeal = props.route.params.selectedMeal
  /* USE EFFECT HOOK THAT IS USED TO Load THE DATA] */
 
  useEffect(() => {
    
    props.navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}  >
          <Item iconName='star' onPress={() => {console.log("Mark")}} />
        </HeaderButtons>)
    });
    
  }, [])

  return (

    <ScrollView>
      <View style={styles.screen}>
        <Image source  = {{uri: selectedMeal.imageUrl}} style={{height: 150, width: "100%"}} />
          {
            selectedMeal.ingredients.map((i,key)=>{
              return <Text key={key}>{i}</Text>
            })
          }

          
            {
              selectedMeal.steps.map((i,key)=>{
                return <Text key={key}>{i}</Text>
              })
            }
          
      </View>
    </ScrollView>
  );

};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});


