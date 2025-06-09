import AddTask from "@/components/AddTask";
import SetName from "@/components/SetName";
import Task from "@/components/Task";
import Title from "@/components/Title";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [myName, setMyName] = useState<string>();
  const [taskList, setTaskList] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTaskList([...taskList, task]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SetName setMyName={setMyName} />
      <Title myName={myName} />
      <Task description="Finish Homework" />

      {taskList.map((task, index) => {
        return <Task key={index} description={task} />;
      })}

      <AddTask addTask={addTask} />
    </View>
  );
}
