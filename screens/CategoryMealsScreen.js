import React, { useEffect, useState } from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';



export default function CategoryMealScreen  (props)  {
  //FETCH THE ID 
  const catId = props.route.params.categoryID;
  const title = props.route.params.title;
  
  /* WE Create a state with EMPTY Array For render */
  const [displayedMeals, setdisplayedMeals] = useState([]);
  
  
  /* USE EFFECT HOOK THAT IS USED TO Load THE DATA] */
  useEffect(() => {
    
    props.navigation.setOptions({headerTitle: title})

    const _filtered = MEALS.filter( meal => meal.categoryIds.includes(catId))
    /* UPDATE THE STATE IF WE GOT THE MEALS */
    setdisplayedMeals(_filtered)
  }, [])
  
  return <MealList listData={displayedMeals} navigation={props.navigation} />
};


 
