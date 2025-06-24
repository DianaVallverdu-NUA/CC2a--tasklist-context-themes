// react
import { useState } from "react";

// react native
import { StyleSheet, View } from "react-native";
import InputAndButton from "./common/InputAndButton";

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
      <InputAndButton
        value={newName}
        onChangeText={setNewName}
        buttonText="Update My Name"
        onButtonPress={onPressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
});

export default SetName;
