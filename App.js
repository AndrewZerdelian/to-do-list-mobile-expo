import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDoScreen from "./SRC/screens/ToDoScreen";

export default function App() {
  return (
    <View>
      <View>
        <ToDoScreen />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
