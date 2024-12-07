import { View, Text, Image } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import Colors from "@/constants/Colors";

export default function Header() {
  const { user } = useUser();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Text style={{ fontSize: 18, fontFamily: "Pally-Bold" }}>Welcome,</Text>
        <Text style={{ fontSize: 24, fontFamily: "Pally-Bold" }}>
          {user?.fullName}
        </Text>
      </View>
      <Image
        source={{ uri: user?.imageUrl }}
        style={{
          width: 48,
          height: 48,
          borderRadius: 99,
          borderColor: Colors.foreground,
          borderWidth: 2,
        }}
      />
    </View>
  );
}
