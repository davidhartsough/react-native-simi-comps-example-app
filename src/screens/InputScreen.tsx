import { View, Text, Input } from "react-native-simi-comps";

export default function InputScreen() {
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="[all of the normal props for the native text input]" />
      <Text text="Example" bold marginVertical={8} />
      <Text
        text={`placeholder="Email"
autoCapitalize="none"
spellCheck={false}
autoComplete="email"
keyboardType="email-address"
returnKeyType="done"
textContentType="emailAddress"`}
      />
      <View marginVertical={8}>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="done"
          spellCheck={false}
          textContentType="emailAddress"
        />
      </View>
    </View>
  );
}
