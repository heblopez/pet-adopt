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
      owner: undefined,
    }));
    return dataParsed;
  } catch (error) {
    console.error("Error fetching favorite pets: ", error);
    return null;
  }
};

export const newFavoritePet = async (petId: number, token: string) => {
  try {
    const response = await fetch(`${API_FAVORITE_URL}/${petId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to add favorite pet");
    }
    const data = await response.json();
    const favParsed = {
      ...data.data.pet,
      userId: data.data.pet.owner.ownerId,
      userFullName: `${data.data.pet.owner.firstName} ${data.data.pet.owner.lastName}`,
      userEmail: data.data.pet.owner.email,
      userImageUrl: data.data.pet.owner.avatarUrl,
      owner: undefined,
    };
    return favParsed;
  } catch (error) {
    console.error("Error adding favorite pet: ", error);
    return null;
  }
};

export const deleteFavoritePet = async (petId: number, token: string) => {
  try {
    const response = await fetch(`${API_FAVORITE_URL}/${petId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to remove favorite pet");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error removing favorite pet: ", error);
    return null;
  }
};
