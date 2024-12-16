import { NewPetForm, Pet } from "@/types";

const API_PETS_URL = `${process.env.EXPO_PUBLIC_API_URL}/api/pets`;

export const getPets = async () => {
  try {
    const response = await fetch(API_PETS_URL);
    if (!response.ok) {
      const jsonError = await response.json();
      throw new Error(jsonError.error);
    }
    const data = await response.json();
    const dataParsed = data.data.map((pet: Pet) => ({
      ...pet,
      userId: pet.ownerId,
      userFullName: `${pet.owner.firstName} ${pet.owner.lastName}`,
      userEmail: pet.owner.email,
      userImageUrl: pet.owner.avatarUrl,
    }));
    return dataParsed;
  } catch (error) {
    console.error("Error fetching pets: ", error);
    return null;
  }
};

export const registerPet = async (pet: NewPetForm, token: string) => {
  try {
    const response = await fetch(API_PETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(pet),
    });
    if (!response.ok) {
      const jsonError = await response.json();
      throw new Error(jsonError.error);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error registering pet: ", error);
    return null;
  }
};

export const getMyPets = async (token: string) => {
  try {
    const response = await fetch(`${API_PETS_URL}/my-pets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const jsonError = await response.json();
      throw new Error(jsonError.error);
    }
    const data = await response.json();
    const dataParsed = data.data.map((pet: Pet) => ({
      ...pet,
      userId: pet.ownerId,
      userFullName: `${pet.owner.firstName} ${pet.owner.lastName}`,
      userEmail: pet.owner.email,
      userImageUrl: pet.owner.avatarUrl,
      owner: undefined,
    }));
    return dataParsed;
  } catch (error) {
    console.error("Error fetching my pets: ", error);
    return null;
  }
};
