import { useState } from "react";
import { View, Text, SearchBar } from "react-native-simi-comps";

export default function SearchBarScreen() {
  const [query, setQuery] = useState("");
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="query: string (required)" />
      <Text text="setQuery: func (required)" />
      <Text text="Example" bold marginVertical={8} />
      <SearchBar query={query} setQuery={setQuery} />
    </View>
  );
}
