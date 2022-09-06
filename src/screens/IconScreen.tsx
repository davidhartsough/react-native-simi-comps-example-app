import { View, Text, Icon } from "react-native-simi-comps";

export default function IconScreen() {
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="icon: string (required)" />
      <Text text="size: number (optional [default is 24])" />
      <Text text="color: string (optional)" />
      <Text text="Examples" bold marginVertical={8} />
      <Text text={`icon="play-circle"`} marginVertical={4} />
      <Icon name="play-circle" />
      <Text text="size={16}" marginVertical={4} />
      <Icon name="lock" size={16} />
      <Text text={`color="#e82110"`} marginVertical={4} />
      <Icon name="mic-off" color="#e82110" />
    </View>
  );
}
