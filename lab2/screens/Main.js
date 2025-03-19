import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const colors = ["#6200EE", "#03DAC5", "#FF0266", "#FFAB00", "#18A0FB"];

const Main = () => {
  const [user, setUser] = useState({
    name: "Chưa có tên",
    avatar: "http://getdrawings.com/free-icon/cool-avatar-icons-72.png",
  });

  const [lastTimeUpdate, setLastTimeUpdate] = useState("");
  const [footerColor, setFooterColor] = useState(colors[0]);

  const handleUpdateInfo = useCallback((newUser) => {
    setUser(newUser);
    setLastTimeUpdate(new Date().toLocaleString());
  }, []);

  const handleChangeFooterColor = useCallback(() => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setFooterColor(newColor);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header user={user} />
      <View style={styles.content}>
        <Body
          onUpdateInfo={handleUpdateInfo}
          onChangeBgFooter={handleChangeFooterColor}
        />
      </View>
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Main;
