import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Greeting from "../Screens/Greeting";
import UserLogin from "../Screens/UserLogin";
import UserSignup from "../Screens/UserSignup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Greeting" component={Greeting} />
      <Stack.Screen name="user-login" component={UserLogin} />
      <Stack.Screen name="User-Signup" component={UserSignup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
