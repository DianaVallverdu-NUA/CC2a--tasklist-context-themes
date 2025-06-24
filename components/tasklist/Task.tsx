import React from "react";
import { StyleSheet, View } from "react-native";
import CheckboxDescription from "./task/CheckboxDescription";
import EditDelete from "./task/EditDelete";

const Task = () => {
  return (
    <View style={styles.container}>
      {/* checkbox & description */}
      <CheckboxDescription />

      {/* button to edit task from main tasklist */}
      <EditDelete />
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
  descriptionText: { marginTop: 7 },
});

export default Task;
