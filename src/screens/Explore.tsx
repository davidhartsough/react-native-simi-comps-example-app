import { useState } from "react";
import { Pressable } from "react-native";
import { List, View, Text } from "react-native-simi-comps";

import type {
  ExploreScreenNavigationProp,
  ExploreStackParamList,
} from "../types";

type ComponentItem = { id: keyof ExploreStackParamList };

const components: ComponentItem[] = [
  { id: "ActionButton" },
  { id: "Chip" },
  { id: "FAB" },
  { id: "FormActions" },
  { id: "Icon" },
  { id: "IconButton" },
  { id: "Input" },
  { id: "LineRule" },
  { id: "List" },
  { id: "Loader" },
  { id: "Modal" },
  { id: "SearchBar" },
  { id: "Text" },
  { id: "TextButton" },
  { id: "TextLink" },
  { id: "Toggle" },
];

export default function Explore({
  navigation,
}: {
  navigation: ExploreScreenNavigationProp;
}) {
  const [items, setItems] = useState(components);
  const onSearch = (query: string) => {
    if (query.length > 1) {
      setItems(components.filter(({ id }) => id.toLowerCase().includes(query)));
    } else {
      setItems(components);
    }
  };
  const renderItem = ({ item }: { item: ComponentItem }) => (
    <View flexed padded>
      <Pressable
        onPress={() => navigation.navigate("Explore", { screen: item.id })}
      >
        <Text text={item.id} />
      </Pressable>
    </View>
  );
  return (
    <View flexed>
      <List
        name="Components"
        items={items}
        renderItem={renderItem}
        onSearch={onSearch}
      />
    </View>
  );
}
