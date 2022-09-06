import { useState } from "react";
import { View, Text, List } from "react-native-simi-comps";

type Thing = { id: string };
const stuff = ["apples", "Bananas", "bacon", "Cheese", "take a walk", "1985"];
const things: Thing[] = stuff.map((id) => ({ id }));

const renderItem = ({ item }: { item: Thing }) => (
  <View flexed padded>
    <Text text={item.id} />
  </View>
);

export default function ListScreen() {
  const [items, setItems] = useState(things);
  const onSearch = (query: string) => {
    if (query.length > 1) {
      setItems(things.filter(({ id }) => id.toLowerCase().includes(query)));
    } else {
      setItems(things);
    }
  };
  return (
    <View flexed>
      <View padded>
        <Text text="Props" bold marginVertical={8} />
        <Text
          text={`name: string (required)
items: [same as FlatList prop "data"] (required)
renderItem: [same as FlatList prop] (required)
onSearch: (query: string) => void (required)
bordered: boolean (optional [default is true])
headerExtra: ReactNode (optional)`}
        />
        <Text text="Example" bold marginTop={8} />
      </View>
      <List
        name="Things"
        items={items}
        renderItem={renderItem}
        onSearch={onSearch}
      />
    </View>
  );
}
