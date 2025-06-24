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

  // handlers
  const onCheckboxChange = () => {
    setChecked(!checked);
  };

  const onDeleteHandler = () => {
    deleteTask(id);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        marginBottom: 4,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {/* checkbox input */}
        <input type="checkbox" onChange={onCheckboxChange}></input>

        {/* display task description */}
        <Text
          style={{
            textDecorationLine: checked ? "line-through" : "none",
            margin: 5,
          }}
        >
          {description}
        </Text>
      </View>

      {/* button to delete task from main tasklist */}
      <Button
        color="red"
        title="Delete Task"
        onPress={onDeleteHandler}
      ></Button>
    </View>
  );
};

export default Task;
