import { View, Text, FAB } from "react-native-simi-comps";

import doNothing from "../do-nothing";

export default function FABScreen() {
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text={`icon: string (optional [default is "plus"])`} />
      <Text text="onPress: func (required)" />
      <FAB onPress={doNothing} />
    </View>
  );
}
