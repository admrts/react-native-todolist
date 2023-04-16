import { View, FlatList } from "react-native";
import Todo from "../Todo/";
import styles from "./TodoList.styles";

const TodoList = () => {
  return (
    <View style={styles.todoListWrapper}>
      <Todo />
      <Todo />
      <Todo />
    </View>
  );
};
export default TodoList;
