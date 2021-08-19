import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

export default function MealDetailScreen  (props) {
  const availableMeals = useSelector(state=>state.meals.meals);
  const dispatch= useDispatch();
  const toggleFavoriteHandler= () =>{
    dispatch(toggleFavorite(availableMeals));
  };
  const selectedMeal = props.route.params.selectedMeal
  /* USE EFFECT HOOK THAT IS USED TO Load THE DATA] */
 
  useEffect(() => {
    
    props.navigation.setOptions({
      headerTitle: availableMeals.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}  >
          <Item iconName='star' onPress={() => {toggleFavoriteHandler}} />
        </HeaderButtons>)
    });
    
  }, [])

  return (

    <ScrollView>
      <View>
        <Image source  = {{uri: selectedMeal.imageUrl}} style={styles.image} />
          {
            selectedMeal.ingredients.map((i,key)=>{
              return <Text style={styles.listItem} key={key}>{i}</Text>
            })
          }

            {
              selectedMeal.steps.map((i,key)=>{
                return <Text style={styles.details} key={key}>{i}</Text>
              })
            }
          
      </View>
    </ScrollView>
  );

};


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 220,
    overflow:'hidden',
    borderRadius:10,
    borderColor:"#1b93de",
    borderWidth:3
  },
  details: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#1b93de',
    borderWidth: 1,
    padding: 10,
    borderRadius:8
  }
});

