import { TaskContext } from "@/contexts/TaskContext";
import { Checkbox } from "@futurejj/react-native-checkbox";
import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CheckboxDescription = () => {
  // extract props
  const { description } = useContext(TaskContext);

  // state - manage when checkbox is checked
  const [checked, setChecked] = useState<Boolean>(false);

  // handlers
  const onCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
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
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  descriptionText: { marginTop: 7 },
});

export default CheckboxDescription;
