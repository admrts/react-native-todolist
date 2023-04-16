import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TextField from "./src/components/TextField/";
import Header from "./src/components/Header/";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TextField />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
