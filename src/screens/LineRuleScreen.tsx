import { View, Text, LineRule } from "react-native-simi-comps";

export default function LineRuleScreen() {
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="[None]" />
      <Text text="Example" bold marginVertical={8} />
      <LineRule />
    </View>
  );
}
