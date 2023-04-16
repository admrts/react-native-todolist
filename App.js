import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TextField from "./src/components/TextField/";
import Header from "./src/components/Header/";
import TodoList from "./src/components/TodoList/";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoList />
      <TextField />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252A34",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30,
  },
});
