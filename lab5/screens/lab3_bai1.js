import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { launchImageLibrary } from "react-native-image-picker";
import { increment, decrement } from "../reducers/counterReducer";

const Lab3_Bai1 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (!response.didCancel && response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="Increase" onPress={() => dispatch(increment())} />
      <Button title="Decrease" onPress={() => dispatch(decrement())} />
      <Button title="Pick an Image" onPress={pickImage} />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200, marginTop: 10 }}
        />
      )}
    </View>
  );
};

export default Lab3_Bai1;
