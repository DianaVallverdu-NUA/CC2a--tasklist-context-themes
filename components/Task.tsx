import { TaskContext } from "@/contexts/TaskContext";
import { TaskListContext } from "@/contexts/TaskListContext";
import { Checkbox } from "@futurejj/react-native-checkbox";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TouchableIcon from "./TouchableIcon";

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
      <View style={styles.subContainer}>
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
      <View style={styles.subContainer}>
        <TouchableIcon
          onPress={onDeleteHandler}
          name="pencil"
          size={20}
          color="blue"
        />

        {/* button to delete task from main tasklist */}
        <TouchableIcon name="trash-can" size={20} color="red" />
      </View>
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
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 45,
  },
  descriptionText: { marginTop: 7 },
});

export default Task;
