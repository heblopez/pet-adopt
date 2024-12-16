import Colors from "@/constants/Colors";
import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import PetItem from "./PetItem";
import { getPets } from "@/services/pet.service";
import { Pet } from "@/types";
import { useFocusEffect } from "expo-router";

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

  const [petsData, setPetsData] = useState([] as Pet[]);

  useEffect(() => {
    getPets().then((data) => {
      setPetsData(data);
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      getPets().then((data) => {
        setPetsData(data);
      });
    }, [])
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
              onPress={() => {
                setSelectedCategory((prev) =>
                  prev === category.name ? null : category.name
                );
              }}
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
        data={
          selectedCategory
            ? petsData.filter((pet) => pet.category === selectedCategory)
            : petsData
        }
        renderItem={({ item }) => <PetItem pet={item} />}
        keyExtractor={(_item, index) => index.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          gap: 18,
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
