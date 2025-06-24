import React from "react";
import { StyleSheet, View } from "react-native";
import CheckboxDescriptionTask from "./CheckboxDespcriptionTask";
import EditDeleteTask from "./EditDeleteTask";

const Task = () => {
  return (
    <View style={styles.container}>
      {/* checkbox & description */}
      <CheckboxDescriptionTask />

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
  descriptionText: { marginTop: 7 },
});

export default Task;
