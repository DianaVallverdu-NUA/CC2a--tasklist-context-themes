// react
import { useState } from "react";

// react native
import { Button, StyleSheet, TextInput, View } from "react-native";

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

  // handlers
  const onButtonPress = () => {
    addTask(task);
  };

  // JSX
  return (
    <View style={styles.container}>
      {/* task description input */}
      <TextInput
        value={task}
        onChangeText={setTask}
        style={styles.textInput}
      ></TextInput>

      {/* button to add task to main list */}
      <Button title="Add Task" onPress={onButtonPress}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", margin: 10 },
  textInput: { backgroundColor: "white" },
});

export default AddTask;
