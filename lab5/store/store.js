import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import imageReducer from "../store/imageSlice";

// Kết hợp reducer
const rootReducer = combineReducers({
  image: imageReducer,
});

// Cấu hình redux persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["image"], // Chỉ lưu reducer image
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Tạo persistor
export const persistor = persistStore(store);
