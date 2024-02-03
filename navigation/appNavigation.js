import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { themeColors } from '../theme';
import {Text, View, LogBox, Platform} from 'react-native';
import {Cog6ToothIcon as Cog6ToothOutline, BellAlertIcon as BellAlertOutline, HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import {Cog6ToothIcon as Cog6ToothSolid, BellAlertIcon as BellAlertSolid, HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid} from 'react-native-heroicons/solid';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeTabs} />
        <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function HomeTabs(){
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false, tabBarShowLabel: false,
      tabBarIcon: ({ focused }) => menuIcons(route, focused),
      tabBarStyle: {
        marginBottom: 20,
        height: 70,
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 20,
        backgroundColor: themeColors.bgLight,
      },
      tabBarItemStyle: {marginTop: ios? 30: 0,}
    })}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="alerts" component={HomeScreen} />
      <Tab.Screen name="favourite" component={HomeScreen} />
      <Tab.Screen name="cart" component={HomeScreen} />
      <Tab.Screen name="setting" component={HomeScreen} />
    </Tab.Navigator>
  )
}

const menuIcons = (route, focused)=> {
  let icon;

  if (route.name === 'home') {
    icon =  focused? <HomeSolid size="25" color={themeColors.bgLight} /> : <HomeOutline size="30" strokeWidth={2} color="white" />
  } else if (route.name === 'alerts') {
    icon =  focused? <BellAlertSolid size="25" color={themeColors.bgLight} /> : <BellAlertOutline size="30" strokeWidth={2} color="white" />
  } else if (route.name === 'favourite') {
    icon =  focused? <HeartSolid size="25" color={themeColors.bgLight} /> : <HeartOutline size="30" strokeWidth={2} color="white" />
  }else if(route.name==='cart'){
    icon =  focused? <BagSolid size="25" color={themeColors.bgLight} /> : <BagOutline size="30" strokeWidth={2} color="white" />
  } else if(route.name==='setting'){
    icon =  focused? <Cog6ToothSolid size="25" color={themeColors.bgLight} /> : <Cog6ToothOutline size="30" strokeWidth={2} color="white" />
  }
  

  let buttonClass = focused? "bg-white": "";
  return (
    <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
      {icon}
    </View>
  )
}