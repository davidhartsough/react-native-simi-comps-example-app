import { ScrollView } from "react-native";
import { View, Text } from "react-native-simi-comps";

export default function TextScreen() {
  return (
    <ScrollView>
      <View flexed padded>
        <Text text="Props" bold marginVertical={8} />
        <Text
          text={`text?: string;
children?: ReactNode;
size?: number;
bold?: boolean;
centered?: boolean;
italic?: boolean;
spaced?: boolean;
style?: TextProps["style"];
color?: string;
numberOfLines?: number;
margin?: number;
marginHorizontal?: number;
marginVertical?: number;
marginTop?: number;
marginRight?: number;
marginBottom?: number;
marginLeft?: number;
selectable?: boolean;`}
        />
        <Text text="Examples" bold marginVertical={8} />
        <Text bold text="bold" />
        <Text italic text="italic" />
        <Text spaced text="spaced" />
        <Text centered text="centered" />
        <Text size={24} text="size 24" />
        <Text color="#e82110" text={`color = "#e82110"`} />
        <Text
          numberOfLines={1}
          text="Number of Lines = 1 so it will not overflow if there is more text"
        />
        <Text margin={16} text="margin = 16" />
        <Text selectable={false} text="selectable = false" marginBottom={16} />
      </View>
    </ScrollView>
  );
}
