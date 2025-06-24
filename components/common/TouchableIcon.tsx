import Icon from "@react-native-vector-icons/fontawesome6";
import {
  Button,
  GestureResponderEvent,
  Platform,
  TouchableHighlight,
} from "react-native";

type IconNames = "pencil" | "trash-can";

interface TouchableIconProps {
  name: IconNames;
  size: number;
  color: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const iconNameToButtonTitle = (name: IconNames) => {
  switch (name) {
    case "pencil":
      return "Edit";

    case "trash-can":
      return "Delete";
  }
};

const TouchableIcon = (props: TouchableIconProps) => {
  const { name, size, color, onPress } = props;
  return (
    <TouchableHighlight onPress={onPress}>
      {Platform.OS != "web" ? (
        <Icon name={name} size={size} color={color} iconStyle="solid" />
      ) : (
        <Button color={color} title={iconNameToButtonTitle(name)}></Button>
      )}
    </TouchableHighlight>
  );
};

export default TouchableIcon;
