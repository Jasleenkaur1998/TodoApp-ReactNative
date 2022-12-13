import React, { useContext } from "react";
import AppStack from "./AppStack";
import { AuthContext } from "../Context/AuthContext";
import AuthStack from "./AuthStack";

const AppNav = () => {
  const { userInfo } = useContext(AuthContext);

  return <>{userInfo ? <AppStack /> : <AuthStack />}</>;
};

export default AppNav;