import { View, Text } from "react-native";
import styles from "./Header.styles";

const Header = ({ todoList }) => {
  const count = todoList.filter((item) => {
    return item.isDone === false;
  });

  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.header}>Todo-List</Text>
      <Text style={styles.count}>{count.length}</Text>
    </View>
  );
};

export default Header;
