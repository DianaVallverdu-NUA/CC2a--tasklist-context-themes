import { TaskContext } from "@/contexts/TaskContext";
import { TaskListContext } from "@/contexts/TaskListContext";
import { useContext } from "react";
import { View } from "react-native";
import AddTask from "./tasklist/AddTask";
import Task from "./tasklist/Task";

const TaskList = () => {
  const { taskList } = useContext(TaskListContext);

  return (
    <View>
      {/* Display tasks */}
      {taskList.map((task) => {
        return (
          <TaskContext.Provider
            key={task.id}
            value={{ description: task.description, id: task.id }}
          >
            <Task />
          </TaskContext.Provider>
        );
      })}

      {/* Add New Task */}
      <AddTask />
    </View>
  );
};

export default TaskList;
