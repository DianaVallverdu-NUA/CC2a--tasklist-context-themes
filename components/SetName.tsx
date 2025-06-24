// react
import { useState } from "react";

// react native
import { Button, StyleSheet, TextInput, View } from "react-native";

// types & interfaces
interface SetNameProps {
  setMyName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// main class
const SetName = (props: SetNameProps) => {
  // extract props
  const { setMyName } = props;

  // state - stores temporary name
  const [newName, setNewName] = useState<string>();

  // handlers
  const onPressHandler = () => {
    setMyName(newName);
  };

  return (
    <View style={styles.container}>
      {/* Name input */}
      <TextInput
        value={newName}
        onChangeText={setNewName}
        style={styles.textInput}
      ></TextInput>

      {/* Button to update from main component */}
      <Button title={"Update My Name"} onPress={onPressHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  textInput: { backgroundColor: "white" },
});

export default SetName;
