import Colors from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function PetDetails() {
  const pet = useLocalSearchParams();
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 24,
        paddingTop: 48,
        backgroundColor: Colors.background,
      }}
    >
      <Text>Pet Details</Text>
      <Text>{JSON.stringify(pet)}</Text>
      {/* Pet Info */}
      {/* Pet Properties */}
      {/* About */}
      {/* Owner Details */}
      {/* Adopt me button */}
    </ScrollView>
  );
}
