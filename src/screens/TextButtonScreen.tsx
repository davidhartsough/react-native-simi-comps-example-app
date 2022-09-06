import { ScrollView } from "react-native";
import { View, Text, TextButton } from "react-native-simi-comps";

import doNothing from "../do-nothing";

export default function TextButtonScreen() {
  return (
    <ScrollView>
      <View flexed padded>
        <Text text="Props" bold marginVertical={8} />
        <Text text="text: string (required)" />
        <Text text="onPress: func (required)" />
        <Text text="type?: ButtonTypeOptions;" />
        <Text text="bgColor: string (optional)" />
        <Text text="textColor: string (optional)" />
        <Text text="disabled: boolean (optional [default is false])" />
        <Text text="flex: boolean (optional [default is true])" />
        <Text text="margin?: number;" />
        <Text text="marginHorizontal?: number;" />
        <Text text="marginVertical?: number;" />
        <Text text="marginLeft?: number;" />
        <Text text="marginRight?: number;" />
        <Text text="Examples" bold marginVertical={8} />
        <TextButton text="Test Button" onPress={doNothing} />
        <Text text={`type="primary"`} marginVertical={4} />
        <TextButton text="Primary Button" type="primary" onPress={doNothing} />
        <Text text={`type="danger"`} marginVertical={4} />
        <TextButton text="Dangerous" type="danger" onPress={doNothing} />
        <Text text="disabled" marginVertical={4} />
        <TextButton text="Disabled" disabled onPress={doNothing} />
      </View>
    </ScrollView>
  );
}
