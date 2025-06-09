import { useState } from "react";
import { Text, View } from "react-native";

interface TaskProps {
  description: string;
}

const Task = (props: TaskProps) => {
  const { description } = props;

  const [checked, setChecked] = useState<Boolean>(false);

  return (
    <View style={{ flexDirection: "row" }}>
      <input type="checkbox" onChange={() => setChecked(!checked)}></input>
      <Text style={{ textDecorationLine: checked ? "line-through" : "none" }}>
        {description}
      </Text>
    </View>
  );
};

export default Task;
