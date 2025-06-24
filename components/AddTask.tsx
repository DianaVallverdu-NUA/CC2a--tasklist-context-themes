// react
import { useContext, useState } from "react";

// react native
import { TaskListContext } from "@/contexts/TaskListContext";
import { StyleSheet, View } from "react-native";
import InputAndButton from "./InputAndButton";

// main class
const AddTask = () => {
  // export props
  const { addTask } = useContext(TaskListContext);

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
