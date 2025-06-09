import { useState } from "react";
import { Button, TextInput, View } from "react-native";

interface AddTaskProps {
  addTask: (task: string) => void;
}

const AddTask = (props: AddTaskProps) => {
  const [task, setTask] = useState<string>("");
  const { addTask } = props;

  return (
    <View style={{ flexDirection: "row", margin: 10 }}>
      <TextInput
        value={task}
        onChangeText={setTask}
        style={{ backgroundColor: "white" }}
      ></TextInput>
      <Button
        title="Add Task"
        onPress={() => {
          addTask(task);
        }}
      ></Button>
    </View>
  );
};

export default AddTask;
