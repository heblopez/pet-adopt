import { Link, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const rootNavigationState = useRootNavigationState();

  const checkNavLoaded = () => {
    if (!rootNavigationState.key) {
      return null;
    }
  };

  useEffect(() => {
    checkNavLoaded();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontFamily: "Pally-Bold",
        }}
      >
        Welcome to PetAdopt
      </Text>
      <Link href={"/login"}>
        <Text style={{ fontSize: 18, color: "blue" }}>Go to Login</Text>
      </Link>
      <Link href={"/home"}>
        <Text style={{ fontSize: 18, color: "blue" }}>Go to Home</Text>
      </Link>
    </View>
  );
}
