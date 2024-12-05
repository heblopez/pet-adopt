import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
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
    </View>
  );
}
