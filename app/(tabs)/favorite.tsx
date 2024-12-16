import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import PetItem from "@/components/Home/PetItem";
import { getFavoritePets } from "@/services/favorite.service";
import { Pet } from "@/types";
import { useAuth } from "@clerk/clerk-expo";

export default function Favorite() {
  const [favoritePets, setFavoritePets] = useState<Pet[]>([]);

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      getFavoritePets(token as string).then((data) => {
        setFavoritePets(data);
      });
    });
  }, []);

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
