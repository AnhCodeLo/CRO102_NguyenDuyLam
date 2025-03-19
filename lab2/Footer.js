import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = memo(({ timeUpdate, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Thời gian cập nhật: {timeUpdate}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});

export default Footer;
