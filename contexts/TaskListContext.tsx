import { createContext, ReactNode, useEffect, useState } from "react";

// types & interfaces
type IdDescriptionPair = {
  id: number;
  description: string;
};

interface TaskListProps {
  taskList: IdDescriptionPair[];
  addTask: (description: string) => void;
  deleteTask: (id: number) => void;
}

const initProps: TaskListProps = {
  taskList: [],
  addTask: () => {},
  deleteTask: () => {},
};

const TaskListContext = createContext<TaskListProps>(initProps);

const TaskListContextProvider = ({children} : {children: ReactNode}) => {
  const [nextId, setNextId] = useState<number>(0);
  const [taskList, setTaskList] = useState<IdDescriptionPair[]>([]);

  // tasklist functions
  const addTask = (description: string) => {
    const taskObject = {
      id: nextId,
      description,
    };
    setTaskList([...taskList, taskObject]);
    setNextId(nextId + 1);
  };

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  // init functions
  useEffect(() => {
    addTask("Finish Homework");
  }, []);

  return (
    <TaskListContext
      value={{ ...initProps, addTask, taskList, deleteTask }}
    >
      {children}
    </TaskListContext>
  );
};

export { TaskListContext };

export default TaskListContextProvider;
