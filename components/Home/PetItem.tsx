import Colors from "@/constants/Colors";
import { View, Text, StyleSheet, Image } from "react-native";

interface Pet {
  name: string;
  imageUrl: string;
  category: string;
  breed: string;
  age: number;
}

export default function PetItem({ pet }: { pet: Pet }) {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: pet.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{pet.name}</Text>
      <View style={styles.wrapperBreedAge}>
        <Text style={styles.breed} numberOfLines={1}>
          {pet.breed}
        </Text>
        <Text style={styles.age}>{pet.age} yrs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginRight: 16,
  },
  image: {
    width: 140,
    height: 120,
    borderRadius: 4,
    resizeMode: "cover",
  },
  name: {
    fontSize: 18,
    fontFamily: "SF-Pro-Bold",
    marginTop: 8,
  },
  wrapperBreedAge: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  breed: {
    fontSize: 14,
    fontFamily: "SF-Pro-Regular",
    color: Colors.gray,
    maxWidth: 90,
  },
  age: {
    fontSize: 12,
    fontFamily: "SF-Pro-Bold",
    color: Colors.primary,
    backgroundColor: Colors.light,
    borderRadius: 12,
    paddingBlock: 4,
    paddingInline: 8,
  },
});
