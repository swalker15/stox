import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ExploreScreen from '../screens/ExploreScreen';
import MyStocksScreen from '../screens/MyStocksScreen';
import { BottomTabParamList, ExploreParamList, MyStocksParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Explore"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MyStocks"
        component={MyStocksNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<ExploreParamList>();

function ExploreNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<MyStocksParamList>();

function MyStocksNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="MyStocksScreen"
        component={MyStocksScreen}
        options={{ headerTitle: 'My Stocks' }}
      />
    </TabTwoStack.Navigator>
  );
}
