import React, { useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

const MovingBox = () => {
  const position = useRef(new Animated.Value(100)).current;

  const moveBox = () => {
    const newY = Math.floor(Math.random() * (height - 200)) + 100;

    Animated.timing(position, {
      toValue: newY,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={moveBox}>
        <Text style={styles.buttonText}>MOVE</Text>
      </TouchableOpacity>

      <Animated.View
        style={[styles.box, { transform: [{ translateY: position }] }]}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  button: {
    position: "absolute",
    top: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#001F7F",
    borderRadius: 10,
    position: "absolute",
    top: 100,
  },
};

export default MovingBox;
