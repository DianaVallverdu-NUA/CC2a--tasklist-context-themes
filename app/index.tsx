import SetName from "@/components/SetName";
import Title from "@/components/Title";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [myName, setMyName] = useState<string>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SetName setMyName={setMyName}/>
      <Title myName={myName} />
    </View>
  );
}

