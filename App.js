import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './pages/Home';
import AddScreen from './pages/Add';
import CarScreen from './pages/Car';



const Tab = createBottomTabNavigator();

export default function App() {
  const [products,setProducts] = useState([])  

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? 
            "ios-information-circle"
            : 
            "ios-information-circle-outline";
          }else if (route.name === "Add") {
            iconName = focused ? 
            "ios-add-circle"
            : 
            "ios-add-circle-outline";
          }else if (route.name === "Car") {
            iconName = focused ?
            "ios-cart"
            : 
            "ios-cart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor :"grey",
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="Add" component={AddScreen} initialParams={{setProducts}}/>
        <Tab.Screen name="Car" component={() => <CarScreen products={products}/>}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

