import { useState } from "react";
import { Button, Text, View } from "react-native";

interface TaskProps {
  description: string;
  id: number;
  deleteTask: (taskId: number) => void;
}

const Task = (props: TaskProps) => {
  // extract props
  const { description, id, deleteTask } = props;

  // state - manage when checkbox is checked
  const [checked, setChecked] = useState<Boolean>(false);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* checkbox input */}
      <input type="checkbox" onChange={() => setChecked(!checked)}></input>

      {/* display task description */}
      <Text
        style={{
          textDecorationLine: checked ? "line-through" : "none",
          margin: 5,
        }}
      >
        {description}
      </Text>

      {/* button to delete task from main tasklist */}
      <Button
        color="red"
        title="Delete Task"
        onPress={() => deleteTask(id)}
      ></Button>
    </View>
  );
};

export default Task;
