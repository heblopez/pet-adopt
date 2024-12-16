import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { FavoritesProvider } from "@/context/FavoritesProvider";
import { View } from "react-native";

const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  const [loaded] = useFonts({
    "Pally-Regular": require("../assets/fonts/Pally-Regular.otf"),
    "Pally-Bold": require("../assets/fonts/Pally-Bold.otf"),
    "SF-Pro-Light": require("../assets/fonts/SF-Pro-Text-Light.otf"),
    "SF-Pro-Regular": require("../assets/fonts/SF-Pro-Text-Regular.otf"),
    "SF-Pro-Medium": require("../assets/fonts/SF-Pro-Text-Medium.otf"),
    "SF-Pro-Bold": require("../assets/fonts/SF-Pro-Text-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <FavoritesProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, headerTitle: "" }}
          />
          <Stack.Screen
            name="pet-details/index"
            options={{
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name="add-new-pet/index"
            options={{
              headerTransparent: true,
              headerTitle: "Add New Pet",
            }}
          />
          <Stack.Screen
            name="my-pets/index"
            options={{
              headerTransparent: true,
              headerTitle: "My Pets",
            }}
          />
        </Stack>
      </FavoritesProvider>
    </ClerkProvider>
  );
}
