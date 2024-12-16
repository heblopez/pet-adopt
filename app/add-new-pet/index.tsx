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
import { NewPetForm } from "@/types";
import CustomPicker from "@/components/PetDetails/CustomPicker";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { registerPet } from "@/services/pet.service";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function AddNewPet() {
  const [data, setData] = useState({} as NewPetForm);
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const cloudName = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME!;

  const { getToken } = useAuth();
  const router = useRouter();

  const fetchToken = async () => {
    const token = await getToken();
    return token;
  };

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!image || Object.keys(data).length < 8) {
      alert("All fields and an image are required, please complete them");
      return;
    }

    setIsLoading(true);
    data.imageUrl = await uploadImage();
    const userToken = (await fetchToken()) as string;
    await registerPet(data, userToken);
    setIsLoading(false);
    router.push("/(tabs)/home");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (image) {
      try {
        const fileUri = image.replace("file://", "");
        const fileBlob = await FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const formData = new FormData();
        formData.append("file", `data:image/jpeg;base64,${fileBlob}`);
        formData.append("upload_preset", "pet_adopt");

        const uploadResponse = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (!uploadResponse.ok) {
          console.error("Failed to upload image:", uploadResponse);
          throw new Error(`HTTP error: ${uploadResponse.status}`);
        }

        const data = await uploadResponse.json();
        return data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        return "";
      }
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
        <Text style={styles.buttonText} disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </Text>
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
