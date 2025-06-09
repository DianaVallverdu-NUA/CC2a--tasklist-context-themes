import { useState } from "react";
import { Button, Text, View } from "react-native";

interface TaskProps {
  description: string;
  id: number;
  deleteTask: (taskId: number) => void;
}

const Task = (props: TaskProps) => {
  const { description, id, deleteTask } = props;

  const [checked, setChecked] = useState<Boolean>(false);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <input type="checkbox" onChange={() => setChecked(!checked)}></input>
      <Text
        style={{
          textDecorationLine: checked ? "line-through" : "none",
          margin: 5,
        }}
      >
        {description}
      </Text>
      <Button
        color="red"
        title="Delete Task"
        onPress={() => deleteTask(id)}
      ></Button>
    </View>
  );
};

export default Task;
