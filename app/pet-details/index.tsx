import { ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PetInfo from "@/components/PetDetails/PetInfo";
import Colors from "@/constants/Colors";
import { Pet } from "@/types";
import PetSubInfo from "@/components/PetDetails/PetSubInfo";
import AboutPet from "@/components/PetDetails/AboutPet";
import OwnerInfo from "@/components/PetDetails/OwnerInfo";
import AdoptMeButton from "@/components/PetDetails/AdoptMeButton";

export default function PetDetails() {
  const pet = useLocalSearchParams() as unknown as Pet;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.background,
        }}
      >
        <PetInfo pet={pet} />
        <PetSubInfo pet={pet} />
        <AboutPet content={pet.about} />
        <OwnerInfo
          userFullName={pet.userFullName}
          userImageUrl={pet.userImageUrl}
          userEmail={pet.userEmail}
        />
      </ScrollView>
      <AdoptMeButton />
    </View>
  );
}
