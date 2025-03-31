import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { launchImageLibrary } from "react-native-image-picker";
import { setImage } from "../store/imageSlice";

const ImagePickerScreen = () => {
  const imageUri = useSelector((state) => state.image.imageUri);
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(true);

  useEffect(() => {
    if (Platform.OS === "android") {
      requestPermission();
    }
  }, []);

  // Yêu cầu quyền truy cập thư viện ảnh trên Android
  const requestPermission = async () => {
    const granted = await PermissionsAndroid.request(
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
  };

  // Chọn ảnh từ thư viện
  const pickImage = () => {
    if (!hasPermission) {
      alert("Ứng dụng chưa có quyền truy cập thư viện ảnh.");
      return;
    }

    const options = {
      mediaType: "photo",
      selectionLimit: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("Người dùng đã huỷ chọn ảnh");
      } else if (response.errorCode) {
        console.log("Lỗi khi chọn ảnh:", response.errorMessage);
      } else if (response.assets) {
        dispatch(setImage(response.assets[0].uri));
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>
        Chọn ảnh từ thư viện
      </Text>
      <Button title="Chọn ảnh" onPress={pickImage} />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200, marginTop: 10 }}
        />
      )}
    </View>
  );
};

export default ImagePickerScreen;
