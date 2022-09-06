import { useState } from "react";
import { View, Text, Toggle } from "react-native-simi-comps";

export default function ToggleScreen() {
  const [value, setValue] = useState(false);
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="label: string (required)" />
      <Text text="value: boolean (required)" />
      <Text text="onChange: func (required)" />
      <Text text="Example" bold marginVertical={8} />
      <Toggle label="Label" value={value} onChange={setValue} />
    </View>
  );
}
