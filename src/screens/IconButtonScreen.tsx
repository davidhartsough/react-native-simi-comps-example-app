import { View, Text, IconButton } from "react-native-simi-comps";

import doNothing from "../do-nothing";

export default function IconButtonScreen() {
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="icon: string (required)" />
      <Text text="onPress: func (required)" />
      <Text text="bordered: boolean (optional [default is true]" />
      <Text text="size: number (optional [default is 24])" />
      <Text text="color: string (optional)" />
      <Text text="Examples" bold marginVertical={8} />
      <Text text={`icon="star" align="center"`} marginVertical={4} />
      <IconButton icon="star" onPress={doNothing} align="center" />
      <Text text={`bordered={false} align="flex-start"`} marginVertical={4} />
      <IconButton
        icon="map-pin"
        onPress={doNothing}
        bordered={false}
        align="flex-start"
      />
      <Text
        text={`color="#2fd566" bordered={false} align="flex-end"`}
        marginVertical={4}
      />
      <IconButton
        icon="trending-up"
        onPress={doNothing}
        color="#2fd566"
        bordered={false}
        align="flex-end"
      />
      <Text text="size={16}" marginVertical={4} />
      <IconButton
        icon="download"
        onPress={doNothing}
        size={16}
        align="center"
      />
    </View>
  );
}
