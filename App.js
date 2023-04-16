import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TextField from "./src/components/TextField/";
import Header from "./src/components/Header/";
import TodoList from "./src/components/TodoList/";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([
    {
      todoItem: "Yapılacak 1",
      isDone: false,
      id: 1,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Header todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <TextField setTodoList={setTodoList} todoList={todoList} />
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
