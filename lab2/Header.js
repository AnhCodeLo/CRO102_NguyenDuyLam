import React, { memo } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = memo(({ user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.welcomeText}>Chào ngày mới</Text>
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#6200EE",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    color: "#FFF",
    fontSize: 14,
  },
  name: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
