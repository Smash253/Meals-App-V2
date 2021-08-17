import 'react-native-gesture-handler';
import { Image, TouchableOpacity } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MealDetailScreen from './screens/MealDetailScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FiltersScreen from './screens/FiltersScreen';
import CategoryMealScreen from './screens/CategoryMealsScreen';

import { Ionicons } from '@expo/vector-icons';



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
    <Stack.Screen name='Categories' component={CategoriesScreen} options={CategoriesScreen.options,{
      headerRight: ()=>
    <TouchableOpacity onPress={() => {navigation.toggleDrawer();} }>
      <Image style={{width:30,height:30}} resizeMode='contain' source={require('./assets/menu.png')} />
      </TouchableOpacity> }} />
    <Stack.Screen name="CategoryScreen" component={CategoryMealScreen} />
    <Stack.Screen name="MealDetail" component={MealDetailScreen} />
  </Stack.Navigator>
  )
}

function  FavoritesStack () {
  return (
  <Stack.Navigator>
    <Stack.Screen name='Favorites' component={FavoritesScreen} options={CategoriesScreen.options} />
    <Stack.Screen name="MealsFav" component={MealDetailScreen} />
  </Stack.Navigator>
  )
}

function FiltersStack () {
  return (
  <Stack.Navigator>
  <Stack.Screen name='FiltersStack' component={FiltersScreen} options={{headerTitle:'Filters'}} />
 </Stack.Navigator>
  )
}

export default function App() {

  return (
<NavigationContainer>
    <Draw.Navigator initialRouteName="HomeDraw" screenOptions={{headerShown:false}}>
    <Draw.Screen name='Home' component={TabBar} />
    <Draw.Screen name='Filters' component={FiltersStack} />
    </Draw.Navigator>
</NavigationContainer>
  );

}


CategoriesScreen.options={
  headerStyle: {backgroundColor:'#1b93de'},
  headerTitleStyle: {fontWeight:'bold', alignSelf:'center'},
  
}

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

/*{title:'Categories',headerRight: ()=>(<Button title='me' onPress={()=>{navigation.toggleDrawer();}} />) }*/

/*const Drawer= createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const FiltersStack= () => (
  <Stack.Navigator>
    <Stack.Screen name='Filters' component={FiltersScreen} />
  </Stack.Navigator>
)

const TabNav= () => (
  <Tab.Navigator shifting={true} screenOptions={{tabBarColor: '#3647e0'}}>
    <Tab.Screen name="Main" component={HomeStackScreen} options={HomeStackScreen.options} />
    <Tab.Screen name='Favorites'  component={FavoritesStack} options={FavoritesScreen.options}/>
  </Tab.Navigator>
)

const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='FavoritesScreen' component={FavoritesScreen} options={FavoritesScreen.options} />
    <Stack.Screen name="MealsNav"  component={MealDetailScreen} options = {MealDetailScreen.options}/>
  </Stack.Navigator>
);

const HomeStackScreen = () => (
  <Stack.Navigator>
  <Stack.Screen name='Categories' component={CategoriesScreen} options={CategoriesScreen.options} />
  <Stack.Screen name="Details" component={CategoryMealsScreen} options = {CategoryMealsScreen.options}/>
  <Stack.Screen name='Meals' component={MealDetailScreen} options = {MealDetailScreen.options}/>
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown:false}} > 
      <Drawer.Screen  name='Home'  component={TabNav} />
      <Drawer.Screen name='Filters'  component={FiltersStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}*/



/* function TabBar () {
  return (
  <Tab.Navigator screenOptions={{headerShow:false}}>
    <Tab.Screen name='HomeTabs' component={HomeStack} />
    <Tab.Screen name='FavoriteTabs' component={FavoritesStack} />
  </Tab.Navigator>
  )
}

function  HomeStack ({navigation}) {
  return (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={CategoriesScreen} options={{title:'Categories',headerRight: ()=>(<Button title='me' onPress={()=>{navigation.toggleDrawer();}} />) }} />
  </Stack.Navigator>
  )
}
function  FavoritesStack () {
  return (
  <Stack.Navigator>
  <Stack.Screen name='Favorites' component={FavoritesScreen} />
 </Stack.Navigator>
  )
}

export default function App() {

  return (
<NavigationContainer>
    <Draw.Navigator screenOptions={{headerShown:false}}>
    <Draw.Screen name='HomeDraw' component={TabBar} />
    <Draw.Screen name='Filters' component={FiltersScreen} />
    </Draw.Navigator>
</NavigationContainer>
  );

} */