import { StyleSheet } from "react-native";

export default StyleSheet.create({
  todoWrapper: {
    backgroundColor: "#08D9D6",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  todoWrapperDone: {
    backgroundColor: "#EAEAEA",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  todoText: {
    color: "#FF2E63",
    fontSize: 25,
    padding: 5,
  },
  todoTextDone: {
    color: "#FF2E63",
    fontSize: 25,
    padding: 5,
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
});
