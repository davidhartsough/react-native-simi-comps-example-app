import { View, Text, TextLink } from "react-native-simi-comps";
import doNothing from "../do-nothing";

export default function TextLinkScreen() {
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="text: string (required)" />
      <Text text="onPress: func (required)" />
      <Text text="color: string (optional)" />
      <Text text="Examples" bold marginVertical={8} />
      <TextLink text="Text Link" onPress={doNothing} />
      <Text text={`color="purple"`} marginVertical={4} />
      <TextLink text="Text Link" color="purple" onPress={doNothing} />
    </View>
  );
}
