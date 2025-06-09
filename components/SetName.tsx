// react
import { useState } from "react";

// react native
import { Button, TextInput, View } from "react-native";

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


  return (
    <View style={{ flexDirection: "row" }}>
      {/* Name input */}
      <TextInput
        value={newName}
        onChangeText={setNewName}
        style={{ backgroundColor: "white" }}
      ></TextInput>

      {/* Button to update from main component */}
      <Button
        title={"Update My Name"}
        onPress={() => {
          setMyName(newName);
        }}
      ></Button>
    </View>
  );
};

export default SetName;


