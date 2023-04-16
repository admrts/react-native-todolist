import { View, FlatList } from "react-native";
import Todo from "../Todo/";
import styles from "./TodoList.styles";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <View style={styles.todoListWrapper}>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Todo data={item} setTodoList={setTodoList} todoList={todoList} />
        )}
      />
    </View>
  );
};
export default TodoList;
