import Colors from "@/constants/Colors";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";

interface SelectProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
}

export default function CustomPicker({
  selectedValue,
  onValueChange,
  options,
}: SelectProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.input}
        onPress={() => {
          if (Platform.OS === "ios") {
            setModalVisible(true);
          }
        }}
      >
        <Text style={styles.text}>{selectedValue || "Select"}</Text>
      </TouchableOpacity>

      {Platform.OS === "ios" && (
        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.value}
                style={{ width: "77%" }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      onValueChange(item.value);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.text}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={[styles.text, { color: "red" }]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {Platform.OS === "android" && (
        <Picker
          style={styles.input}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          mode="dropdown"
          itemStyle={{ fontFamily: "SF-Pro-Regular" }}
        >
          {options.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light,
  },
  text: {
    fontFamily: "SF-Pro-Regular",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
  },
});
