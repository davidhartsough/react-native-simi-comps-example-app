import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarIcon, useThemeColor } from "react-native-simi-comps";

import type { RootTabParamList } from "../types";

import Docs from "../screens/Docs";
import ExploreStack from "./ExploreStack";

function ExploreTabBarIcon({ color }: { color: string }) {
  return <TabBarIcon name="compass" color={color} />;
}
function DocsTabBarIcon({ color }: { color: string }) {
  return <TabBarIcon name="book" color={color} />;
}

const BottomTabs = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const tabBarActiveTintColor = useThemeColor("tabBarTint");
  return (
    <BottomTabs.Navigator
      initialRouteName="Explore"
      screenOptions={{ tabBarActiveTintColor }}
    >
      <BottomTabs.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ExploreTabBarIcon,
        }}
      />
      <BottomTabs.Screen
        name="Docs"
        component={Docs}
        options={{
          title: "Docs",
          tabBarIcon: DocsTabBarIcon,
        }}
      />
    </BottomTabs.Navigator>
  );
}
