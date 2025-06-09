// react
import { useState } from "react";

// react native
import { Button, TextInput, View } from "react-native";

// types & interfaces
interface AddTaskProps {
  addTask: (task: string) => void;
}

// main class
const AddTask = (props: AddTaskProps) => {
  // export props
  const { addTask } = props;
  
  // task state - stores temporary description
  const [task, setTask] = useState<string>("");

  

  // JSX
  return (
    <View style={{ flexDirection: "row", margin: 10 }}>
      {/* task description input */}
      <TextInput
        value={task}
        onChangeText={setTask}
        style={{ backgroundColor: "white" }}
      ></TextInput>

      {/* button to add task to main list */}
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
