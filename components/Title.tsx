import { Text } from "@react-navigation/elements";
import { useEffect, useState } from "react";

// interfaces & props
interface TitleProps {
  myName?: string;
}

// main class
const Title = (props: TitleProps) => {
  const [title, setTitle] = useState("My To Do List");

  // use ternary operation to decide tasklist Title if name is / isn't defined
  useEffect(() => {
    if (props.myName) setTitle(`${props.myName}'s To Do List`);
    else setTitle("My To Do List");
  }, [props.myName]);

  // display title
  return <Text>{title}!</Text>;
};

export default Title;
