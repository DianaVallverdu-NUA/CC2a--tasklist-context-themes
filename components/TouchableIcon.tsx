import Icon from "@react-native-vector-icons/fontawesome6";
import { GestureResponderEvent, Text, TouchableHighlight } from "react-native";

interface TouchableIconProps {
  name: "pencil" | "trash-can",
  size: number,
  color: string,
  onPress?: ((event: GestureResponderEvent) => void)
}

const TouchableIcon = (props: TouchableIconProps) => {
  const {name, size, color, onPress} = props;
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>
        <Icon name={name} size={size} color={color} iconStyle="solid" />
      </Text>
    </TouchableHighlight>
  );
};

export default TouchableIcon;