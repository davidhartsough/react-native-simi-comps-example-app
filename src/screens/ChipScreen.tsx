import { View, Text, Chip } from "react-native-simi-comps";

import doNothing from "../do-nothing";

const list = ["apples", "Bananas", "bacon", "Cheese", "take a walk", "1985"];

export default function ChipScreen() {
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="text: string (required)" />
      <Text text="onTextPress: func (optional)" />
      <Text text="onRemove: func (optional)" />
      <View row wrap marginVertical={8}>
        {list.map((item) => (
          <View
            key={item}
            style={{
              marginRight: 4,
              marginVertical: 4,
              overflow: "hidden",
              flexShrink: 1,
            }}
          >
            <Chip text={item} onRemove={doNothing} />
          </View>
        ))}
      </View>
    </View>
  );
}
