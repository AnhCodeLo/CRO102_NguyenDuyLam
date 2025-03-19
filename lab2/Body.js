import React, { memo, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ToastAndroid,
} from "react-native";

const Body = memo(({ onUpdateInfo, onChangeBgFooter }) => {
  const [name, setName] = useState("");
  const [linkImage, setLinkImage] = useState("");

  const handleUpdateInfo = () => {
    if (name.length > 0 && linkImage.length > 0) {
      onUpdateInfo({ name, avatar: linkImage });
    } else {
      ToastAndroid.show("Vui lòng nhập đủ thông tin!", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên mới"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Đường dẫn avatar mới"
        value={linkImage}
        onChangeText={setLinkImage}
      />
      <Button title="CẬP NHẬT THÔNG TIN" onPress={handleUpdateInfo} />
      <Button
        title="ĐỔI MÀU FOOTER"
        onPress={onChangeBgFooter}
        color="#03DAC5"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default Body;
