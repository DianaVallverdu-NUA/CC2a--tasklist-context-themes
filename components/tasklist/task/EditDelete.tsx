import { TaskContext } from "@/contexts/TaskContext";
import { TaskListContext } from "@/contexts/TaskListContext";
import { useContext } from "react";
import { Platform, StyleSheet, View } from "react-native";
import TouchableIcon from "../../common/TouchableIcon";

const EditDelete = () => {
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
    ...Platform.select({
      web: { minWidth: 120 },
      default: { minWidth: 45 },
    }),
  },
});

export default EditDelete;
