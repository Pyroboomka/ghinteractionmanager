import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Initial from "../screens/Initial";

// Try with createStack
const Stack = createStackNavigator();
const DefaultStack = createStackNavigator();
const ContentStack = createStackNavigator();

const ContentStackNavigator = () => {
  return (
      <ContentStack.Navigator>
        <ContentStack.Screen name="Screen1" component={Screen1} />
        <ContentStack.Screen name="Screen2" component={Screen2} />
      </ContentStack.Navigator>
  )
}

const DefaultStackNavigator = () => {
  return (
      <DefaultStack.Navigator initialRouteName="Initial" screenOptions={{ headerShown: false }}>
        <DefaultStack.Screen name="Initial" component={Initial} />
        <DefaultStack.Screen name="Content" component={ContentStackNavigator} />
      </DefaultStack.Navigator>
  )
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
      <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={DefaultStackNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
