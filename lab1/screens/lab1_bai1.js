import React from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import CustomHeader from "../components/CustomHeader";

const Lab1_Bai1 = () => {
  const handleBackPress = () => {
    Alert.alert("Quay lại");
  };

  const handleProfilePress = () => {
    Alert.alert("Xem hồ sơ");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header 1 */}
      <CustomHeader
        title="Trang Chủ"
        onBackPress={handleBackPress}
        onProfilePress={handleProfilePress}
      />

      {/* Header 2 */}
      <CustomHeader
        title="Giỏ Hàng"
        onBackPress={handleBackPress}
        onProfilePress={handleProfilePress}
      />

      {/* Header 3 */}
      <CustomHeader
        title="Tin Tức"
        onBackPress={handleBackPress}
        onProfilePress={handleProfilePress}
      />

      <View style={{ padding: 20 }}>
        <Text>Nội dung chính của ứng dụng</Text>
      </View>
    </SafeAreaView>
  );
};

export default Lab1_Bai1;
