import { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextButton,
  IconButton,
} from "react-native-simi-comps";

export default function ModalScreen() {
  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text="icon: string (required)" />
      <Text text="size: number (optional [default is 24])" />
      <Text text="color: string (optional)" />
      <Text text="Examples" bold marginVertical={8} />
      <Text text={`icon="play-circle"`} marginVertical={4} />
      <TextButton text="Open Modal" onPress={open} flex={false} />
      <Modal visible={visible} close={hide}>
        <View padded>
          <View row separate>
            <Text size={24} text="Modal Title" />
            <IconButton onPress={hide} icon="x" size={24} bordered={false} />
          </View>
          <Text text="[Modal Content]" marginVertical={8} />
        </View>
      </Modal>
    </View>
  );
}
