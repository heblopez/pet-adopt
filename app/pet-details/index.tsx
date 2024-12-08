import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PetInfo from "@/components/PetDetails/PetInfo";
import Colors from "@/constants/Colors";
import { Pet } from "@/types";
import PetSubInfo from "@/components/PetDetails/PetSubInfo";

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
      <PetSubInfo pet={pet} />
      {/* About */}
      {/* Owner Details */}
      {/* Adopt me button */}
    </ScrollView>
  );
}
