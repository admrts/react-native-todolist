import { View, TextInput, Button } from "react-native";
import styles from "./TextField.styles";

const TextField = () => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} placeholder="Add Todo" />
      <Button title="Add" />
    </View>
  );
};

export default TextField;
