import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabs";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootStack.Navigator>
        <RootStack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
