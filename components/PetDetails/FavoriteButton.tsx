import { Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFavorites } from "@/context/FavoritesProvider";
import { Pet } from "@/types";
import Colors from "@/constants/Colors";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";

export default function FavoriteButton({ pet }: { pet: Pet }) {
  const { favoritePets, addFavoritePet, removeFavoritePet } = useFavorites();

  const isFav = (): boolean =>
    favoritePets?.some((fav) => Number(fav.petId) === Number(pet.petId));

  const [isFavorite, setIsFavorite] = useState(isFav());

  useFocusEffect(
    useCallback(() => {
      setIsFavorite(isFav());
    }, [])
  );

  const handlePress = () => {
    if (isFavorite) {
      removeFavoritePet(pet.petId);
      setIsFavorite(false);
    } else {
      addFavoritePet(pet);
      setIsFavorite(true);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      {isFavorite ? (
        <AntDesign name="heart" size={28} color={Colors.secondary} />
      ) : (
        <AntDesign name="hearto" size={28} color={Colors.secondary} />
      )}
    </Pressable>
  );
}
