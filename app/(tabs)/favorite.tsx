import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useCallback, useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import PetItem from "@/components/Home/PetItem";
import { getFavoritePets } from "@/services/favorite.service";
import { Pet } from "@/types";
import { useAuth } from "@clerk/clerk-expo";
import { useFocusEffect } from "expo-router";

export default function Favorite() {
  const [favoritePets, setFavoritePets] = useState<Pet[]>([]);

  const { getToken } = useAuth();

  const fetchFavorites = async () => {
    const token = await getToken();
    const data = await getFavoritePets(token as string);
    setFavoritePets(data);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchFavorites();
    }, [])
  );

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Favorite Pets</Text>
      <View style={styles.grid}>
        {favoritePets?.map((pet) => (
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
