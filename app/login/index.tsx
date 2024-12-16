import { useCallback, useEffect } from "react";
import { View, Text, Image, Pressable, Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { useOAuth, useUser } from "@clerk/clerk-expo";
import Colors from "@/constants/Colors";
import { authUser } from "@/services/auth.service";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    if (Platform.OS === "web") return;
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
  const redirectUrl = Linking.createURL("/(tabs)/home", { scheme: "myapp" });

  const { user } = useUser();

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl,
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        if (user) {
          await authUser({
            userId: user.id,
            email: user.primaryEmailAddress?.emailAddress!,
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            phoneNumber: user.primaryPhoneNumber?.phoneNumber || "",
            avatarUrl: user.imageUrl || "",
          });
        }
        Linking.openURL(redirectUrl);
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
          height: Platform.OS === "web" ? 499 : 399,
          resizeMode: "contain",
          marginTop: Platform.OS === "web" ? 0 : 48,
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
            maxWidth: 599,
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
