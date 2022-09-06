import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./navigation";
import Theme from "./Theme";

export default function Index() {
  return (
    <SafeAreaProvider>
      <Theme>
        <Navigation />
      </Theme>
      <StatusBar />
    </SafeAreaProvider>
  );
}
