import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Index from "./src/index";

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Feather.font);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  if (!isLoadingComplete) return null;
  return <Index />;
}
