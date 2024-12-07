import Colors from "@/constants/Colors";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import PetItem from "./PetItem";

const dataPets = [
  {
    name: "Zeus",
    category: "Dogs",
    imageUrl:
      "https://spotpet.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2Fwp-image-197858%2F7746c729ddf5a2a730f17999268362de%2FLabrador-Retriever-Dog-Breed-Guide.jpg&w=1200&q=75",
    breed: "Labrador Retriever",
    age: 4,
  },
  {
    name: "Figaro",
    category: "Cats",
    imageUrl:
      "https://spotpet.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2Fwp-image-197219%2Fadadb5218e0bc3445222ef21e8e931d5%2FBengal-Cat-Breed-Guide.jpg&w=1200&q=75",
    breed: "Bengal",
    age: 3,
  },
  {
    name: "Hamlet",
    category: "Hamsters",
    imageUrl:
      "https://www.reptilecymru.co.uk/wp-content/uploads/2021/03/Syrian-Hamster-.png",
    breed: "Syrian",
    age: 1,
  },
  {
    name: "Nemo",
    category: "Fish",
    imageUrl:
      "https://i.pinimg.com/736x/24/7f/ae/247fae125ccd5c0966848b67b3b2389b.jpg",
    breed: "Clownfish",
    age: 2,
  },
];

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

  const [selectedCategory, setSelectedCategory] = useState("Dogs");

  return (
    <View style={{ marginBlock: 8 }}>
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
          marginBottom: 24,
        }}
      >
        {categories.map((category, index) => (
          <View style={styles.container} key={index}>
            <TouchableOpacity
              style={[
                styles.containerImg,
                category.name === selectedCategory && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category.name)}
              activeOpacity={0.7}
            >
              <Image
                source={category.imageUrl}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, fontFamily: "SF-Pro-Regular" }}>
              {category.name}
            </Text>
          </View>
        ))}
      </View>
      <FlatList
        data={dataPets}
        renderItem={({ item }) => <PetItem pet={item} />}
        keyExtractor={(_item, index) => index.toString()}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
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
    backgroundColor: Colors.light,
    padding: 14,
    borderWidth: 2,
    borderColor: Colors.foreground,
    borderRadius: 99,
  },
  selectedCategory: {
    backgroundColor: Colors.secondary,
  },
});
