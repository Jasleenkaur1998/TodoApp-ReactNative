import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddToDo from "../Screens/addToDo";
import Home from "../Screens/Home";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="add" component={AddToDo} />
    </Stack.Navigator>
  );
};

export default AppStack;
