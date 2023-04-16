import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import styles from "./TextField.styles";

const TextField = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.inputWrapper}
    >
      <TextInput style={styles.input} placeholder="Add Todo" />
      <Button title="Add" />
    </KeyboardAvoidingView>
  );
};

export default TextField;
