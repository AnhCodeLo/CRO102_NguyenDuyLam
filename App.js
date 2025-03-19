import React from "react";
import { Appearance } from "react-native";
import Lab1_Bai1 from "./lab1/screens/lab1_bai1";
import Lab1_Bai2 from "./lab1/screens/lab1_bai2";
import Lab2_Bai1 from "./lab2/screens/Main";

const App = () => {
  Appearance.setColorScheme("light");

  return <Lab2_Bai1 />;
};

export default App;
