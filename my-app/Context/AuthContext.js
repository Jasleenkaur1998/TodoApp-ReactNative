import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const registerUser = ({ name, email, password }, navigation) => {
    axios
      .post(`${BASE_URL_DEV}/users/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigation.navigate("user-login");
      })
      .catch((e) => {
        console.log(`register error ${e}`);
      });
  };

  const userLogin = ({ email, password }, navigation) => {
    axios
      .post(`${BASE_URL_DEV}/users/login`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigation.navigate("home");
      })
      .catch((e) => {
        Alert.alert("error", e.message);
        console.log(e);
      });
  };

  const logout = (navigation) => {
    AsyncStorage.removeItem("userInfo");
    setUserInfo({});
    navigation.navigate("greeting");
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo");

      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        registerUser,
        userLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
