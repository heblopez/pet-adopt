import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
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

  return <Stack />;
}
