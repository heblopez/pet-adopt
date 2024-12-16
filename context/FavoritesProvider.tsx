import { createContext, useContext, useEffect, useState } from "react";
import { Pet } from "@/types";
import { useAuth } from "@clerk/clerk-expo";
import {
  deleteFavoritePet,
  getFavoritePets,
  newFavoritePet,
} from "@/services/favorite.service";

interface FavoritesContext {
  favoritePets: Pet[];
  addFavoritePet: (petId: Pet) => void;
  removeFavoritePet: (petId: number) => void;
}

const FavoritesContext = createContext<FavoritesContext>(
  {} as FavoritesContext
);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoritePets, setFavoritePets] = useState<Pet[]>([]);
  const [userToken, setUserToken] = useState<string | null>(null);

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      setUserToken(token as string);
      getFavoritePets(token as string).then((data) => {
        setFavoritePets(data);
      });
    });
  }, []);

  const addFavoritePet = async (pet: Pet) => {
    try {
      await newFavoritePet(pet.petId, userToken as string);
      setFavoritePets((prev) => [...prev, pet]);
    } catch (error) {
      console.error("Error adding favorite pet: ", error);
    }
  };

  const removeFavoritePet = async (petId: number) => {
    try {
      deleteFavoritePet(petId, userToken as string);
      setFavoritePets((prev) => prev.filter((pet) => pet.petId !== petId));
    } catch (error) {
      console.error("Error removing favorite pet: ", error);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoritePets,
        addFavoritePet,
        removeFavoritePet,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
