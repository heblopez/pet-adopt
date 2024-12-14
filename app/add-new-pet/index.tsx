import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { newPetForm } from "@/types";
import CustomPicker from "@/components/PetDetails/CustomPicker";
import * as ImagePicker from "expo-image-picker";

export default function AddNewPet() {
  const [data, setData] = useState({} as newPetForm);
  const [image, setImage] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log(data);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add new pet for adoption:</Text>
      <Pressable onPress={pickImage} style={styles.imageContainer}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={[
              styles.image,
              { backgroundColor: "transparent", borderColor: "transparent" },
            ]}
          />
        ) : (
          <Image
            source={require("@/assets/images/paw-placeholder.png")}
            style={styles.image}
          />
        )}
      </Pressable>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Pet Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Doggy"
          onChangeText={(value) => handleChange("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Pet Category:</Text>
        <CustomPicker
          selectedValue={data.category}
          onValueChange={(value) => handleChange("category", value)}
          options={[
            { label: "Dogs", value: "Dogs" },
            { label: "Cats", value: "Cats" },
            { label: "Hamsters", value: "Hamsters" },
            { label: "Fish", value: "Fish" },
          ]}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Breed:</Text>
        <TextInput
          style={styles.input}
          placeholder="Golden Retriever"
          onChangeText={(value) => handleChange("breed", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Age (yrs):</Text>
        <TextInput
          style={styles.input}
          placeholder="2"
          onChangeText={(value) => handleChange("age", value)}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Gender:</Text>
        <CustomPicker
          selectedValue={data.gender}
          onValueChange={(value) => handleChange("gender", value)}
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Weight (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder="17"
          onChangeText={(value) => handleChange("weight", value)}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Lima, Peru"
          onChangeText={(value) => handleChange("location", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>About:</Text>
        <TextInput
          style={styles.input}
          placeholder="A cool dog that loves to play"
          onChangeText={(value) => handleChange("about", value)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.77}
        onPress={handleSubmit}
      >
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
  imageContainer: { width: 120, height: 120, marginInline: "auto" },
  image: {
    width: "100%",
    height: "100%",
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
    marginTop: 16,
    alignItems: "center",
    marginBottom: 36,
  },
  buttonText: {
    fontFamily: "Pally-Bold",
    fontSize: 16,
    color: Colors.white,
  },
});
