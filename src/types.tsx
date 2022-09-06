import type {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import type {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type ExploreStackParamList = {
  Components: undefined;
  ActionButton: undefined;
  Chip: undefined;
  FAB: undefined;
  FormActions: undefined;
  Icon: undefined;
  IconButton: undefined;
  Input: undefined;
  LineRule: undefined;
  List: undefined;
  Loader: undefined;
  Modal: undefined;
  SearchBar: undefined;
  Text: undefined;
  TextButton: undefined;
  TextLink: undefined;
  Toggle: undefined;
};

export type RootTabParamList = {
  Explore: NavigatorScreenParams<ExploreStackParamList>;
  Docs: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Root"
>;

export type ExploreScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, "Explore">,
  NativeStackNavigationProp<ExploreStackParamList>
>;
