import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MealDetailScreen from './screens/MealDetailScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FiltersScreen from './screens/FiltersScreen';
import CategoryMealScreen from './screens/CategoryMealsScreen';
import mealsReducer from './store/reducers/meals';

import { Ionicons } from '@expo/vector-icons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './components/HeaderButton';


const rootReducer = combineReducers({
  meals:mealsReducer
});


const store=createStore(rootReducer);
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Draw = createDrawerNavigator();


function TabBar () {
  return (
  <Tab.Navigator screenOptions={{headerShow:false}} shifting={true} >
    <Tab.Screen name='Main' component={HomeStack} options={HomeStack.options} />
    <Tab.Screen name='Favorite' component={FavoritesStack} options={FavoritesStack.options} />
  </Tab.Navigator>
  )
}

function  HomeStack ({navigation}) {
  return (
  <Stack.Navigator screenOptions={CategoriesScreen.options}>
    <Stack.Screen name='Categories' component={CategoriesScreen} options={CategoriesScreen.options, {headerLeft: ()=>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item iconName="menu-outline" iconSize={23} onPress={()=>{navigation.toggleDrawer();}} />
    </HeaderButtons>}} />
    <Stack.Screen name="CategoryScreen" component={CategoryMealScreen} />
    <Stack.Screen name="MealDetail" component={MealDetailScreen} />
  </Stack.Navigator>
  )
}

function  FavoritesStack ({navigation}) {
  return (
  <Stack.Navigator screenOptions={{headerTitle:'Favorites', 
  headerStyle: {backgroundColor:'#1b93de'}}}>
    <Stack.Screen name='Favorites' component={FavoritesScreen} options={{headerLeft: ()=>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item iconName="menu-outline" iconSize={23} onPress={()=>{navigation.toggleDrawer();}}/>
    </HeaderButtons>
    
    }} />
  </Stack.Navigator>
  )
}

function FiltersStack ({navigation}) {
  return (
  <Stack.Navigator screenOptions={FiltersStack.options}>
  <Stack.Screen name='FiltersStack' component={FiltersScreen} options={{headerLeft: ()=>
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item iconName="menu-outline" iconSize={23} onPress={()=>{navigation.openDrawer();}} />
  </HeaderButtons>,headerRight: ()=>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item iconName="save-outline" iconSize={23} onPress={()=>{navigation.navigate("Home")}} />
    </HeaderButtons>}} />
 </Stack.Navigator>
  )
}

export default function App() {

  return (
<Provider store={store}>  
<SafeAreaProvider>
  <NavigationContainer>
      <Draw.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Draw.Screen name='Home' component={TabBar} />
        <Draw.Screen name='Filters' component={FiltersStack}/>
      </Draw.Navigator>
  </NavigationContainer>
  </SafeAreaProvider>  
</Provider>
  );

}

FiltersStack.options={
  headerTitle:'Filters',
  headerStyle: {backgroundColor:'#1b93de'}
},

FavoritesStack.options={
  headerTitle:'Favorites', 
  headerStyle: {backgroundColor:'#1b93de'}
},

CategoriesScreen.options={
    headerTitle:'Categories',
    headerStyle:{backgroundColor:'#1b93de'}
  };
  


FavoritesStack.options={
  tabBarIcon: () => {
    return <Ionicons name='star' size={25} color={'#03fce8'} />
  },
  tabBarColor:'#3b4fd1'
  
}


HomeStack.options={
  tabBarIcon: () => {
    return <Ionicons name='restaurant' size={25} color={'#03fce8'} />
  },
  tabBarColor:'#1b93de'
}