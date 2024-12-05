import Colors from "@/constants/Colors";
import { View, Text, Image, Pressable } from "react-native";

export default function Login() {
  return (
    <View style={{ backgroundColor: "#FAF8F6", flex: 1 }}>
      <Image
        source={require("../../assets/images/login-image.jpg")}
        style={{
          width: "100%",
          height: 399,
          objectFit: "cover",
          marginTop: 50,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 40,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Pally-Bold",
            textAlign: "center",
            color: Colors.primary,
          }}
        >
          Ready to make a new friend?
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Pally-Regular",
            textAlign: "center",
            color: Colors.gray,
            margin: 16,
          }}
        >
          Let's adopt the pet which you like and make there life happy again 🐶
        </Text>
        <Pressable
          style={{
            backgroundColor: Colors.primary,
            padding: 16,
            borderRadius: 12,
            width: "90%",
            marginTop: 48,
          }}
        >
          <Text
            style={{
              fontFamily: "Pally-Bold",
              fontSize: 20,
              color: Colors.white,
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
