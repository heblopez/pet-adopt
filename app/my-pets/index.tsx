import PetItem from "@/components/Home/PetItem";
import Colors from "@/constants/Colors";
import { getMyPets } from "@/services/pet.service";
import { Pet } from "@/types";
import { useAuth } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function MyPets() {
  const [myPets, setMyPets] = useState<Pet[]>([]);

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      getMyPets(token as string).then((data) => {
        setMyPets(data);
      });
    });
  }, []);

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Your Posted Pets:</Text>
      <View style={styles.grid}>
        {myPets?.map((pet) => (
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
    fontSize: 24,
    marginTop: 56,
    marginBottom: 16,
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
