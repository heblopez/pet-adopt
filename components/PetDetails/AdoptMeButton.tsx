import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function AdoptMeButton() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.57}>
      <Text style={styles.text}>Adopt Me</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBlock: 14,
    paddingInline: 24,
    backgroundColor: Colors.primary,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  text: {
    fontSize: 24,
    fontFamily: "Pally-Bold",
    textAlign: "center",
    color: Colors.white,
  },
});
