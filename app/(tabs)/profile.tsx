import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Profile() {
  const { user } = useUser();
  const options = [
    { label: "Add New Pet", icon: "add-circle", path: "/add-new-pet" },
    { label: "My Pets", icon: "paw", path: "/my-pets" },
    { label: "Log Out", icon: "exit", path: "/logout" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image source={{ uri: user?.imageUrl }} style={styles.image} />
      <View style={styles.infoWrapper}>
        <Text style={styles.infoItem}>{user?.fullName}</Text>
        <Text style={styles.infoItem}>
          {user?.primaryEmailAddress?.emailAddress}
        </Text>
      </View>
      <FlatList
        data={options}
        style={{ width: "100%" }}
        contentContainerStyle={styles.optionsContainer}
        renderItem={({ item }) => (
          <Pressable
            style={styles.optionWrapper}
            onPress={() => console.log(item.path)}
          >
            <Ionicons
              name={item.icon as keyof typeof Ionicons.glyphMap}
              size={24}
              color={Colors.primary}
              style={{
                backgroundColor: Colors.light,
                padding: 8,
                borderRadius: 12,
              }}
            />
            <Text
              key={item.path}
              style={{ fontSize: 16, fontFamily: "SF-Pro-Regular" }}
            >
              {item.label}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingInline: 24,
    paddingBlock: 72,
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Pally-Bold",
    color: Colors.primary,
    marginRight: "auto",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignContent: "center",
    marginBottom: 16,
  },
  infoItem: {
    fontSize: 16,
    fontFamily: "Pally-Regular",
    textAlign: "center",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "100%",
  },
  optionWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingBlock: 12,
    paddingInline: 18,
  },
});
