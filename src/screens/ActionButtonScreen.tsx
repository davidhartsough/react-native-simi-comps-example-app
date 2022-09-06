import { ScrollView } from "react-native";
import { View, Text, ActionButton } from "react-native-simi-comps";

import doNothing from "../do-nothing";

export default function ActionButtonScreen() {
  return (
    <ScrollView>
      <View flexed padded>
        <Text text="Props" bold marginVertical={8} />
        <Text text="text: string (required)" />
        <Text text="icon: string (required)" />
        <Text text="onPress: func (required)" />
        <Text
          text={`type: "default" | "primary" (optional [default is "default"])`}
        />
        <Text text="disabled: bool (optional)" />
        <Text text="Examples" bold marginVertical={8} />
        <Text text={`text="Example" icon="phone"`} />
        <View centered marginVertical={16}>
          <ActionButton text="Example" icon="phone" onPress={doNothing} />
        </View>
        <Text text={`type="primary"`} />
        <View centered marginVertical={16}>
          <ActionButton
            text="Press Me"
            icon="music"
            type="primary"
            onPress={doNothing}
          />
        </View>
        <Text text="disabled" />
        <View centered marginVertical={16}>
          <ActionButton
            text="Disabled"
            icon="send"
            disabled
            onPress={doNothing}
          />
        </View>
        <Text text="And here's a row of 'em!" />
        <View row separate marginVertical={16}>
          <ActionButton
            type="primary"
            icon="bookmark"
            text="Save"
            onPress={doNothing}
          />
          <ActionButton icon="coffee" text="Coffee" onPress={doNothing} />
          <ActionButton icon="share" text="Share" onPress={doNothing} />
        </View>
      </View>
    </ScrollView>
  );
}
