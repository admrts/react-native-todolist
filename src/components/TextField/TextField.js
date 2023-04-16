import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import styles from "./TextField.styles";
import { useState } from "react";

const TextField = ({ setTodoList, todoList }) => {
  const [todo, setTodo] = useState("");
  const id = new Date().getTime();

  const addTodo = () => {
    setTodoList([...todoList, { todoItem: todo, isDone: false, id }]);
    setTodo("");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.inputWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder="Add Todo"
        value={todo}
        onChangeText={setTodo}
      />
      <Button title="Add" onPress={addTodo} />
    </KeyboardAvoidingView>
  );
};

export default TextField;
