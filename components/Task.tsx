import { TaskListContext } from "@/contexts/TaskListContext";
import { Checkbox } from "@futurejj/react-native-checkbox";
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
        <TouchableHighlight>
          <Text>
            <Icon name="pencil" size={20} color="blue" iconStyle="solid" />
          </Text>
        </TouchableHighlight>

        {/* button to delete task from main tasklist */}
        <TouchableHighlight onPress={onDeleteHandler}>
          <Text>
            <Icon name="trash-can" size={20} color="red" iconStyle="solid" />
          </Text>
        </TouchableHighlight>
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
