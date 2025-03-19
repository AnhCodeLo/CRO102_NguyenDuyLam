import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: -10,
    marginLeft: 5,
    zIndex: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    alignSelf: "flex-start",
    bottom: 10,
  },
  container: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 5,
  },
  row: {
    flexDirection: "column",
    marginBottom: 10,
  },
  label: {
    fontWeight: "600",
    color: "#555",
  },
  value: {
    color: "#333",
    fontSize: 16,
    bottom: 15,
    fontWeight: "bold",
  },
  image: {
    height: 150,
    borderRadius: 8,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
