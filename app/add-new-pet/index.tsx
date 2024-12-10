import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function AddNewPet() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add new pet for adoption:</Text>
      <Image
        source={require("@/assets/images/paw-placeholder.png")}
        style={styles.image}
      />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Pet Name:</Text>
        <TextInput style={styles.input} placeholder="Doggy" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Breed:</Text>
        <TextInput style={styles.input} placeholder="Golden Retriever" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Age (yrs):</Text>
        <TextInput style={styles.input} placeholder="2" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Weight (kg):</Text>
        <TextInput style={styles.input} placeholder="17" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Location:</Text>
        <TextInput style={styles.input} placeholder="Lima, Peru" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>About:</Text>
        <TextInput
          style={styles.input}
          placeholder="A cool dog that loves to play"
        />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.77}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
    paddingTop: 89,
    gap: 4,
  },
  title: {
    fontFamily: "Pally-Regular",
    fontSize: 22,
    marginBlock: 16,
    color: Colors.primary,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
    resizeMode: "cover",
    padding: 8,
    borderColor: Colors.foreground,
    backgroundColor: Colors.light,
    borderWidth: 1,
  },
  inputGroup: {
    marginVertical: 4,
  },
  label: {
    marginVertical: 8,
    fontFamily: "SF-Pro-Medium",
    fontSize: 14,
  },
  input: {
    fontFamily: "SF-Pro-Regular",
    fontSize: 14,
    padding: 12,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Pally-Bold",
    fontSize: 16,
    color: Colors.white,
  },
});
