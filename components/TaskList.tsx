import { TaskContext } from "@/contexts/TaskContext";
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
          <TaskContext.Provider
            value={{ description: task.description, id: task.id }}
          >
            <Task key={task.id}/>
          </TaskContext.Provider>
        );
      })}

      {/* Add New Task */}
      <AddTask />
    </View>
  );
};

export default TaskList;
