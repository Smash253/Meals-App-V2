import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';



export default function CategoryMealScreen  (props)  {
  

  const availableMeals = useSelector(state=>state.meals.filteredMeals);
  const catId = props.route.params.categoryID;
  const title = props.route.params.title;
  
  const [displayedMeals, setdisplayedMeals] = useState([]);
  
  
  useEffect(() => {
    
    props.navigation.setOptions({headerTitle: title})

    const _filtered = availableMeals.filter( meal => meal.categoryIds.includes(catId))
    setdisplayedMeals(_filtered)
  }, [])
  
  return <MealList listData={displayedMeals} navigation={props.navigation} />
};


 
