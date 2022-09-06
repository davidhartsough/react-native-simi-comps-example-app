import { View, Text, Loader } from "react-native-simi-comps";

export default function LoaderScreen() {
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="size: number (optional [default is 24])" />
      <Text text="Examples" bold marginVertical={8} />
      <Text text="size={16}" marginVertical={4} />
      <View padded>
        <Loader size={16} />
      </View>
      <Text text="size={24} (default)" marginVertical={4} />
      <View padded>
        <Loader />
      </View>
      <Text text="size={48} (default)" marginVertical={4} />
      <View padded>
        <Loader size={48} />
      </View>
    </View>
  );
}
