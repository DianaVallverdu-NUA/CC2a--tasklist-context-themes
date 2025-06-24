import { TaskListContext } from "@/contexts/TaskListContext";
import { Checkbox } from '@futurejj/react-native-checkbox';
import Icon from "@react-native-vector-icons/fontawesome6";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

interface TaskProps {
  description: string;
  id: number;
}

const Task = (props: TaskProps) => {
  // extract props
  const { description, id } = props;

  const { deleteTask } = useContext(TaskListContext);

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
    <View style={styles.container}>
      <View style={styles.leftArea}>
        {/* checkbox input */}
        <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={onCheckboxChange}
      />

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
      <TouchableHighlight onPress={onDeleteHandler}>
        <View>
          <Text>
            <Icon name="trash" size={20} color="" iconStyle="solid" />
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    marginBottom: 4,
  },
  leftArea: { flexDirection: "row" },
});

export default Task;
