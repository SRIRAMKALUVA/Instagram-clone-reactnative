import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen.js";
import NewPostScreen from "./NewPostScreen.js";
import NewPostDisplayScreen from "./NewPostDisplayScreen.js";
import LoginScreen from "./LoginScreen.js";
import SignUpScreen from "./SignUpScreen.js";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="NewPostImageDisplayScreen"
        component={NewPostDisplayScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
