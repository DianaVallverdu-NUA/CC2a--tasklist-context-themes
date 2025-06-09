import AddTask from "@/components/AddTask";
import SetName from "@/components/SetName";
import Task from "@/components/Task";
import Title from "@/components/Title";
import { useEffect, useState } from "react";
import { View } from "react-native";

type IdDescriptionPair = {
  id: number;
  description: string;
};

export default function Index() {
  const [myName, setMyName] = useState<string>();
  const [maxId, setMaxId] = useState<number>(0);
  const [taskList, setTaskList] = useState<IdDescriptionPair[]>([]);

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

  useEffect(() => {
    addTask("Finish Homework");
  }, []);

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

      <AddTask addTask={addTask} />
    </View>
  );
}
