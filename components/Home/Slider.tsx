import { View, FlatList, Image, Dimensions } from "react-native";

export default function Slider() {
  const images = [
    require("../../assets/images/slider_1.jpg"),
    require("../../assets/images/slider_2.jpg"),
    require("../../assets/images/slider_3.jpg"),
  ];

  return (
    <View style={{ marginBlock: 8 }}>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: Dimensions.get("screen").width * 0.88,
              height: 177,
              borderRadius: 16,
              marginRight: 16,
            }}
          />
        )}
      />
    </View>
  );
}
