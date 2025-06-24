import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface InputAndButtonProps {
  value?: string;
  buttonText: string;
  onChangeText?: (text: string) => void;
  onButtonPress?: (event: GestureResponderEvent) => void;
}

const InputAndButton = (props: InputAndButtonProps) => {
  const { value, buttonText, onChangeText, onButtonPress } = props;

  const onPress = (event: GestureResponderEvent) => {
    if (onButtonPress) onButtonPress(event);
  };

  return (
    <View style={styles.container}>
      {/* task description input */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
      ></TextInput>

      {/* button to add task to main list */}
      <Button title={buttonText} onPress={onPress}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  textInput: { backgroundColor: "white" },
});

export default InputAndButton;
