import { View, Text } from "react-native";
import styles from "./Header.styles";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.header}>Yapılacaklar</Text>
      <Text style={styles.count}>5</Text>
    </View>
  );
};

export default Header;
