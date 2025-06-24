import { TaskListContext } from "@/contexts/TaskListContext";
import { useContext } from "react";
import { View } from "react-native";
import AddTask from "./AddTask";
import Task from "./Task";

const TaskList = () => {
  const { taskList } = useContext(TaskListContext);

  return (
    <View>
      {/* Display tasks */}
      {taskList.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            description={task.description}
          />
        );
      })}

      {/* Add New Task */}
      <AddTask />
    </View>
  );
};

export default TaskList;
