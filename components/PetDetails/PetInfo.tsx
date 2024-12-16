import { View, Text, Image, StyleSheet } from "react-native";
import { Pet } from "@/types";
import Colors from "@/constants/Colors";
import FavoriteButton from "./FavoriteButton";

export default function PetInfo({ pet }: { pet: Pet }) {
  return (
    <View>
      <Image source={{ uri: pet.imageUrl }} style={styles.image} />
      <View style={styles.wrapper}>
        <View style={styles.wrapperNameLocation}>
          <Text style={styles.name}>{pet.name}</Text>
          <Text style={styles.location}>{pet.location}</Text>
        </View>
        <FavoriteButton pet={pet} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 450,
    resizeMode: "cover",
  },
  wrapper: {
    padding: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapperNameLocation: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  name: {
    fontSize: 28,
    fontFamily: "Pally-Bold",
  },
  location: {
    fontSize: 14,
    fontFamily: "SF-Pro-Regular",
    color: Colors.gray,
  },
});
