import { AuthUserData } from "@/types";

const API_AUTH_URL = `${process.env.EXPO_PUBLIC_API_URL}/api/auth`;

export const authUser = async (userData: AuthUserData) => {
  try {
    const response = await fetch(API_AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Failed to authenticate user");
    }
    const data = await response.json();
    console.log("Authenticated user:", data.data);
    return data.data;
  } catch (error) {
    console.error("Error authenticating user: ", error);
    return null;
  }
};
