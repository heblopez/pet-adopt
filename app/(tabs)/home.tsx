import { View, ScrollView } from "react-native";
import Header from "@/components/Home/Header";
import Colors from "@/constants/Colors";
import Slider from "@/components/Home/Slider";
import Categories from "@/components/Home/Categories";
import AddButton from "@/components/Home/AddButton";

export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 24,
        paddingTop: 48,
        backgroundColor: Colors.background,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <Slider />
      <Categories />
      <AddButton />
    </ScrollView>
  );
}
