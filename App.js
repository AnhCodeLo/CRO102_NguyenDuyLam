import React from "react";
import { Appearance } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./lab5/store/store";
import ImagePickerScreen from "./lab5/screens/ImagePickerScreen";
import Lab1_Bai1 from "./lab1/screens/lab1_bai1";
import Lab1_Bai2 from "./lab1/screens/lab1_bai2";
import Lab2_Bai1 from "./lab2/screens/Main";
import Lab5_Bai1 from "./lab5/screens/lab3_bai1";
import Lab3_Bai1 from "./lab3/Lab3_Bai1";
import Lab3_Bai2 from "./lab3/Lab3_Bai2";

const App = () => {
  Appearance.setColorScheme("light");

  return <Lab3_Bai1 />;

  // return (
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //       <ImagePickerScreen />
  //     </PersistGate>
  //   </Provider>
  // );
};

export default App;
