import { useState } from "react";
import { Button, TextInput, View } from "react-native";

interface SetNameProps {
  setMyName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SetName = (props: SetNameProps) => {
  const [newName, setNewName] = useState<string>();

  const { setMyName } = props;

  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        value={newName}
        onChangeText={setNewName}
        style={{ backgroundColor: "white" }}
      ></TextInput>
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


