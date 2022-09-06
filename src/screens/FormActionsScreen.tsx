import { View, Text, FormActions } from "react-native-simi-comps";

import doNothing from "../do-nothing";

export default function FormActionsScreen() {
  return (
    <View flexed padded>
      <Text text="Props" bold marginVertical={8} />
      <Text text={`icon: string (optional [default is "plus"])`} />
      <Text text="onPress: func (required)" />
      <Text text="Examples" bold marginVertical={8} />
      <Text text={`submitText="Submit"`} />
      <FormActions submit={doNothing} submitText="Submit" cancel={doNothing} />
      <Text text="submitDisabled" marginTop={16} />
      <FormActions
        submit={doNothing}
        submitText="Send"
        cancel={doNothing}
        submitDisabled
      />
    </View>
  );
}
