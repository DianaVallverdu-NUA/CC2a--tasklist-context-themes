import { createContext } from "react";

interface TaskProps {
  description: string;
  id: number;
}

const initProps = {
  description: "",
  id: -1,
};

const TaskContext = createContext<TaskProps>(initProps);

export { TaskContext };
