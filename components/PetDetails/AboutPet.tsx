import Colors from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";

export default function AboutPet({ content }: { content: string }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "Pally-Bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.gray,
    textAlign: "justify",
  },
});
