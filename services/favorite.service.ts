import { FavoritePet } from "@/types";

const API_FAVORITE_URL = `${process.env.EXPO_PUBLIC_API_URL}/api/favorites`;

export const getFavoritePets = async (token: string) => {
  try {
    const response = await fetch(API_FAVORITE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch favorite pets");
    }
    const data = await response.json();
    const dataParsed = data.data.map((fav: FavoritePet) => ({
      ...fav.pet,
      userId: fav.pet.ownerId,
      userFullName: `${fav.pet.owner.firstName} ${fav.pet.owner.lastName}`,
      userEmail: fav.pet.owner.email,
      userImageUrl: fav.pet.owner.avatarUrl,
    }));
    return dataParsed;
  } catch (error) {
    console.error("Error fetching favorite pets: ", error);
    return null;
  }
};
