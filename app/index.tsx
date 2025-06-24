// react
import { useState } from "react";

// react native
import { StyleSheet, View } from "react-native";

// custom
import SetName from "@/components/SetName";
import TaskList from "@/components/TaskList";
import Title from "@/components/Title";
import TaskListContextProvider from "@/contexts/TaskListContext";

// main class
export default function Index() {
  // title state
  const [myName, setMyName] = useState<string>();

  // JSX
  return (
    <View style={styles.container}>
      {/* Title with custom name */}
      <SetName setMyName={setMyName} />
      <Title myName={myName} />

      <TaskListContextProvider>
        <TaskList />
      </TaskListContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
});
