import Colors from "@/constants/Colors";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

export default function AddButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => {
        router.push("/add-new-pet");
      }}
    >
      <Text style={styles.text}>Add New Pet</Text>
      <MaterialIcons name="pets" size={24} color={Colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    marginBlock: 16,
    backgroundColor: Colors.primary,
    borderColor: Colors.secondary,
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: "dashed",
  },
  text: {
    fontSize: 24,
    fontFamily: "Pally-Bold",
    color: Colors.white,
  },
});
