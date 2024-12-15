import { NewPetForm } from "@/types";

const API_PETS_URL = `${process.env.EXPO_PUBLIC_API_URL}/api/pets`;

export const getPets = async () => {
  try {
    const response = await fetch(API_PETS_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch pets");
    }
    const data = await response.json();
    return data.data;
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
      throw new Error("Failed to register pet");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error registering pet: ", error);
    return null;
  }
};
