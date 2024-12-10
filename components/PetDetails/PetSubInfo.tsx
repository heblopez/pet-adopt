import Colors from "@/constants/Colors";
import { Pet } from "@/types";
import { View, Text, StyleSheet, Image } from "react-native";

export default function PetSubInfo({ pet }: { pet: Pet }) {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.wrapperProp}>
        <Image
          source={require("../../assets/images/schedule.png")}
          style={styles.icon}
        />
        <View style={styles.wrapperText}>
          <Text style={styles.textProp}>Age</Text>
          <Text style={styles.textValue}>{pet.age} year(s)</Text>
        </View>
      </View>
      <View style={styles.wrapperProp}>
        <Image
          source={require("../../assets/images/dog-treat.png")}
          style={styles.icon}
        />
        <View style={styles.wrapperText}>
          <Text style={styles.textProp}>Breed</Text>
          <Text style={styles.textValue}>{pet.breed}</Text>
        </View>
      </View>
      <View style={styles.wrapperProp}>
        <Image
          source={require("../../assets/images/gender.png")}
          style={styles.icon}
        />
        <View style={styles.wrapperText}>
          <Text style={styles.textProp}>Gender</Text>
          <Text style={styles.textValue}>{pet.gender}</Text>
        </View>
      </View>
      <View style={styles.wrapperProp}>
        <Image
          source={require("../../assets/images/weight.png")}
          style={styles.icon}
        />
        <View style={styles.wrapperText}>
          <Text style={styles.textProp}>Weight</Text>
          <Text style={styles.textValue}>{pet.weight} kg.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingInline: 24,
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  wrapperProp: {
    padding: 16,
    display: "flex",
    width: 164,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 24,
    overflow: "hidden",
  },
  icon: {
    width: 48,
    height: 48,
  },
  wrapperText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  textProp: {
    fontSize: 16,
    fontFamily: "SF-Pro-Bold",
    color: Colors.primary,
  },
  textValue: {
    fontSize: 12,
    fontFamily: "SF-Pro-Regular",
    textAlign: "center",
    maxWidth: 80,
  },
});
