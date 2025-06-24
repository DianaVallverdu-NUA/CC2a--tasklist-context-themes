import { TaskContext } from "@/contexts/TaskContext";
import { TaskListContext } from "@/contexts/TaskListContext";
import { Checkbox } from "@futurejj/react-native-checkbox";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import EditDeleteTask from "./EditDeleteTask";

const Task = () => {
  // extract props
  const { description, id } = useContext(TaskContext);

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
      <View style={styles.leftSection}>
        {/* checkbox input */}
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={onCheckboxChange}
        />

        {/* display task description */}
        <Text
          style={{
            ...styles.descriptionText,
            textDecorationLine: checked ? "line-through" : "none",
          }}
        >
          {description}
        </Text>
      </View>

      {/* button to edit task from main tasklist */}
        <EditDeleteTask />
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
  leftSection: {
    flexDirection: "row",
  },
  descriptionText: { marginTop: 7 },
});

export default Task;
