import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Explore from "../screens/Explore";
import ActionButtonScreen from "../screens/ActionButtonScreen";
import ChipScreen from "../screens/ChipScreen";
import FABScreen from "../screens/FABScreen";
import FormActionsScreen from "../screens/FormActionsScreen";
import IconScreen from "../screens/IconScreen";
import IconButtonScreen from "../screens/IconButtonScreen";
import InputScreen from "../screens/InputScreen";
import LineRuleScreen from "../screens/LineRuleScreen";
import ListScreen from "../screens/ListScreen";
import LoaderScreen from "../screens/LoaderScreen";
import ModalScreen from "../screens/ModalScreen";
import SearchBarScreen from "../screens/SearchBarScreen";
import TextScreen from "../screens/TextScreen";
import TextButtonScreen from "../screens/TextButtonScreen";
import TextLinkScreen from "../screens/TextLinkScreen";
import ToggleScreen from "../screens/ToggleScreen";

const Stack = createNativeStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Components" component={Explore} />
      <Stack.Screen name="ActionButton" component={ActionButtonScreen} />
      <Stack.Screen name="Chip" component={ChipScreen} />
      <Stack.Screen name="FAB" component={FABScreen} />
      <Stack.Screen name="FormActions" component={FormActionsScreen} />
      <Stack.Screen name="Icon" component={IconScreen} />
      <Stack.Screen name="IconButton" component={IconButtonScreen} />
      <Stack.Screen name="Input" component={InputScreen} />
      <Stack.Screen name="LineRule" component={LineRuleScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Loader" component={LoaderScreen} />
      <Stack.Screen name="Modal" component={ModalScreen} />
      <Stack.Screen name="SearchBar" component={SearchBarScreen} />
      <Stack.Screen name="Text" component={TextScreen} />
      <Stack.Screen name="TextButton" component={TextButtonScreen} />
      <Stack.Screen name="TextLink" component={TextLinkScreen} />
      <Stack.Screen name="Toggle" component={ToggleScreen} />
    </Stack.Navigator>
  );
}
