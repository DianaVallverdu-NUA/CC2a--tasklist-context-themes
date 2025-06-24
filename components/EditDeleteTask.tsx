import { TaskContext } from "@/contexts/TaskContext";
import { TaskListContext } from "@/contexts/TaskListContext";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import TouchableIcon from "./TouchableIcon";

const EditDeleteTask = () => {
  const { deleteTask } = useContext(TaskListContext);
  const { id } = useContext(TaskContext);

  const onDeleteHandler = () => {
    deleteTask(id);
  };

  return (
    <View style={styles.container}>
      {/* edit button */}
      <TouchableIcon name="pencil" size={20} color="blue" />

      {/* delete button */}
      <TouchableIcon
        onPress={onDeleteHandler}
        name="trash-can"
        size={20}
        color="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 45,
  },
});

export default EditDeleteTask;
