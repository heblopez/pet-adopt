import Colors from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, Image, StyleSheet } from "react-native";

interface OwnerInfoProps {
  userFullName: string;
  userImageUrl: string;
  userEmail: string;
}

export default function OwnerInfo(props: OwnerInfoProps) {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: props.userImageUrl }} style={styles.image} />
      <View style={styles.wrapperText}>
        <Text style={styles.textName}>{props.userFullName}</Text>
        <Text style={styles.textProp}> Pet Owner</Text>
        <View style={styles.wrapperEmail}>
          <AntDesign name="mail" size={16} color={Colors.secondary} />
          <Text style={styles.textEmail}>{props.userEmail}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBlock: 12,
    paddingInline: 20,
    marginInline: 24,
    marginBlock: 8,
    backgroundColor: Colors.light,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.secondary,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  wrapperText: {
    display: "flex",
    gap: 6,
    width: "80%",
    alignItems: "center",
  },
  textName: {
    fontSize: 16,
    fontFamily: "SF-Pro-Bold",
  },
  textProp: {
    fontSize: 14,
    fontFamily: "SF-Pro-Medium",
    color: Colors.gray,
  },
  wrapperEmail: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  textEmail: {
    fontSize: 12,
    fontFamily: "SF-Pro-Medium",
  },
});
