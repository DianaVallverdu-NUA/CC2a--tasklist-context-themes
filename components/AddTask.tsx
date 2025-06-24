// react
import { useState } from "react";

// react native
import { StyleSheet, View } from "react-native";
import InputAndButton from "./InputAndButton";

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
    if (task != "") addTask(task);
    setTask("");
  };

  // JSX
  return (
    <View style={styles.container}>
      {/* task description input */}
      <InputAndButton
        value={task}
        buttonText="Add Task"
        onChangeText={setTask}
        onButtonPress={onButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
});

export default AddTask;
