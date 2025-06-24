// react
import { useEffect, useState } from "react";

// react native
import { StyleSheet, View } from "react-native";

// custom
import AddTask from "@/components/AddTask";
import SetName from "@/components/SetName";
import Task from "@/components/Task";
import Title from "@/components/Title";

// types & interfaces
type IdDescriptionPair = {
  id: number;
  description: string;
};

// main class
export default function Index() {
  // title state
  const [myName, setMyName] = useState<string>();

  // tasklist state
  const [maxId, setMaxId] = useState<number>(0);
  const [taskList, setTaskList] = useState<IdDescriptionPair[]>([]);

  // tasklist functions
  const addTask = (task: string) => {
    const taskObject = {
      id: maxId,
      description: task,
    };
    setTaskList([...taskList, taskObject]);
    setMaxId(maxId + 1);
  };

  const deleteTask = (taskId: number) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  // init functions
  useEffect(() => {
    addTask("Finish Homework");
  }, []);

  // JSX
  return (
    <View
      style={styles.container}
    >
      {/* Title with custom name */}
      <SetName setMyName={setMyName} />
      <Title myName={myName} />

      {/* Display tasks */}
      {taskList.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            description={task.description}
            deleteTask={deleteTask}
          />
        );
      })}

      {/* Add New Task */}
      <AddTask addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  }
});