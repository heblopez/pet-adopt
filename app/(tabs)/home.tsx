import { View } from "react-native";
import Header from "@/components/Home/Header";
import Colors from "@/constants/Colors";
import Slider from "@/components/Home/Slider";
import Categories from "@/components/Home/Categories";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        paddingTop: 48,
        backgroundColor: Colors.background,
      }}
    >
      <Header />
      <Slider />
      <Categories />
    </View>
  );
}
