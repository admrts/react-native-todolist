import { View, Text } from "react-native";
import styles from "./Todo.styles";

const Todo = () => {
  return (
    <View style={styles.todoWrapper}>
      <Text style={styles.todoText}>Todo İtem 1</Text>
    </View>
  );
};

export default Todo;
