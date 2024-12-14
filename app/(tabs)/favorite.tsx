import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { petsData } from "@/data/pets";
import PetItem from "@/components/Home/PetItem";

export default function Favorite() {
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Favorite Pets</Text>
      <View style={styles.grid}>
        {petsData.map((pet) => (
          <PetItem key={pet.petId} pet={pet} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingInline: 24,
    paddingBlock: 48,
  },
  title: {
    fontFamily: "Pally-Bold",
    fontSize: 28,
    marginBlock: 16,
    color: Colors.primary,
  },
  grid: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 24,
    justifyContent: "space-between",
    marginBottom: 24,
  },
});
