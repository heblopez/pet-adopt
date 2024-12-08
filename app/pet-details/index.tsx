import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PetInfo from "@/components/PetDetails/PetInfo";
import Colors from "@/constants/Colors";
import { Pet } from "@/types";

export default function PetDetails() {
  const pet = useLocalSearchParams() as unknown as Pet;
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <PetInfo pet={pet} />
      {/* Pet Properties */}
      {/* About */}
      {/* Owner Details */}
      {/* Adopt me button */}
    </ScrollView>
  );
}
