import { View, Text, Button } from "react-native";
import styles from "./Todo.styles";

const Todo = ({ data, setTodoList, todoList }) => {
  const handleTouch = () => {
    // const index = todoList.findIndex((item) => item.id === data.id);
    // const newValue = !todoList[index].isDone;
    // const changeTodo = { ...data, isDone: newValue };
    // const newTodos = [...todoList];
    // newTodos.splice(index, 1, changeTodo);
    // setTodoList(newTodos);
  };

  const deletePress = () => {
    const filterList = todoList.filter((item) => {
      return item.id !== data.id;
    });
    setTodoList(filterList);
  };

  const donePress = () => {
    const index = todoList.findIndex((item) => item.id === data.id);
    const newValue = !todoList[index].isDone;
    const changeTodo = { ...data, isDone: newValue };
    const newTodos = [...todoList];
    newTodos.splice(index, 1, changeTodo);
    setTodoList(newTodos);
  };
  return (
    <View
      onTouchStart={handleTouch}
      style={data.isDone ? styles.todoWrapperDone : styles.todoWrapper}
    >
      <Text
        numberOfLines={0}
        style={data.isDone ? styles.todoTextDone : styles.todoText}
      >
        {data.todoItem}
      </Text>
      <View style={styles.buttonWrapper}>
        <Button title="Done" color="black" onPress={donePress} />
        <Button title="Delete" onPress={deletePress} color="red" />
      </View>
    </View>
  );
};

export default Todo;
