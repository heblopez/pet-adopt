import { useUser } from "@clerk/clerk-expo";
import { Link, Redirect, useRootNavigationState } from "expo-router";
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

  const { user } = useUser();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user ? <Redirect href={"/(tabs)/home"} /> : <Redirect href={"/login"} />}
    </View>
  );
}
