import React from "react";
import { SafeAreaView, ScrollView, Alert } from "react-native";
import SectionView from "../components/SectionView";

const Lab1_Bai2 = () => {
  const scheduleData = {
    location: "Hồ Tràm, Vũng Tàu",
    time: "09:00 AM - 12:00 AM, 12/12/2024",
    transport: "Xe bus",
    go: "21:00 - 22:00",
    image:
      "http://cdn.tgdd.vn/Files/2022/02/22/1416895/cam-nang-du-lich-ho-tram-vung-tau-day-du-va-chi-tiet-2022-202202230032087404.jpg",
  };

  const hotelData = {
    location: "Hồng Quỳnh",
    time: "06:00 AM - 12:00 AM",
    name: "234 Quang Trung, Hồ Chí Minh",
  };

  const handleDetailPress = () => {
    Alert.alert("Xem chi tiết");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <SectionView
          title="Lịch trình"
          data={scheduleData}
          showButton={false}
          onPressDetail={handleDetailPress}
        />

        <SectionView
          title="Khách sạn"
          data={{
            location: hotelData.location,
            time: hotelData.time,
            transport: hotelData.name,
          }}
          showGo={false}
          onPressDetail={handleDetailPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lab1_Bai2;
