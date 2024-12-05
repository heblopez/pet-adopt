import { useCallback, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { useOAuth } from "@clerk/clerk-expo";
import Colors from "@/constants/Colors";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const redirectUrl = Linking.createURL("/home", { scheme: "myapp" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl,
        });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        Linking.openURL(redirectUrl);
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

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
          onPress={onPress}
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
