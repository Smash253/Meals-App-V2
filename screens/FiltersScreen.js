import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';


function FiltersScreen  ({navigation})  {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);


  const FiltersSwitch = props =>{
    return(
      <View style={styles.filtersContainer}>
        <Text>{props.label}</Text>
        <Switch 
        thumbColor={'#1b93de'}
        trackColor={{true:'#03fce8'}}
        value={props.state} 
        onValueChange={props.onChange} />
      </View> 
    )};
   
  
  return (
    <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FiltersSwitch label='Gluten-Free' state={isGlutenFree} onChange={newValue=>setIsGlutenFree(newValue)} />
        <FiltersSwitch label='Lactose-Free' state={isLactoseFree} onChange={newValue=>setIsLactoseFree(newValue)} />
        <FiltersSwitch label='Vegan' state={isVegan} onChange={newValue=>setIsVegan(newValue)} />
        <FiltersSwitch label='Vegetarian' state={isVegetarian} onChange={newValue=>setIsVegetarian(newValue)} />
      
    </View>
  );};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding:10
  },

  title: {
    
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },

  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
    
  }
});

export default FiltersScreen;
