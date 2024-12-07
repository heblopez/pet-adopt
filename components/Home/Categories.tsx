import Colors from "@/constants/Colors";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Categories() {
  const categories = [
    { name: "Dogs", imageUrl: require("../../assets/images/dog-icon.png") },
    { name: "Cats", imageUrl: require("../../assets/images/cat-icon.png") },
    {
      name: "Hamsters",
      imageUrl: require("../../assets/images/hamster-icon.png"),
    },
    { name: "Fish", imageUrl: require("../../assets/images/fish-icon.png") },
  ];

  return (
    <View style={{ marginBlock: 16 }}>
      <Text
        style={{ fontSize: 24, fontFamily: "Pally-Bold", marginBottom: 20 }}
      >
        Categories
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {categories.map((category, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.containerImg}>
              <Image
                source={category.imageUrl}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </View>
            <Text style={{ fontSize: 14, fontFamily: "SF-Pro-Regular" }}>
              {category.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
  },
  containerImg: {
    backgroundColor: Colors.secondary,
    padding: 14,
    borderWidth: 2,
    borderColor: Colors.foreground,
    borderRadius: 99,
  },
});
