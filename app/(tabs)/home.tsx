import { View } from "react-native";
import Header from "@/components/Home/Header";
import Colors from "@/constants/Colors";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        paddingTop: 64,
        backgroundColor: Colors.background,
      }}
    >
      <Header />
    </View>
  );
}
