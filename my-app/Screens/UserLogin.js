import { View, Text, Image } from "react-native";
import React, { useContext, useState } from "react";
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
  VStack,
  Box,
  InputGroup,
  InputLeftAddon,
  Button,
  Flex,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../Context/AuthContext";

export default UserLogin = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const { userLogin  } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState(0);

  const login = () => {
    userLogin(
      {
        email,
        password,
      },
      navigation
    );
  };

  return (
    <Box flex="1" alignItems="center" justifyContent="center" safeAreaTop>
      <VStack space={2.5} w="100%" px="3">
        <Center>
          <Image
            style={{
              width: 300,
            }}
            source={require("../assets/signup.png")}
            resizeMode="contain"
          />
          <Input
            borderColor={"primary.900"}
            borderRadius={10}
            color={"primary.900"}
            marginBottom={3}
            value={email}
            onChange={(e) => setEmail(e.nativeEvent.text)}
            w={{
              base: 300,
              md: "100%",
            }}
            height={12}
            type="email"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="email" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Enter Email Address"
          />
          <Input
            borderColor={"primary.900"}
            borderRadius={10}
            color={"primary.900"}
            value={password}
            onChange={(e) => setPassword(e.nativeEvent.text)}
            marginBottom={3}
            w={{
              base: 300,
              md: "100%",
            }}
            height={12}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Enter Password"
          />

          <Button
            marginTop={10}
            onPress={() => login()}
            bgColor={"primary.900"}
            style={{ width: 300, paddingTop: 16, paddingBottom: 16 }}
            rounded="full"
          >
            <Flex>
              {/* <Icon name="cog" /> */}
              <Text style={{ color: "#fff", fontSize: 20 }}>
                Login
              </Text>
            </Flex>
          </Button>
        </Center>
      </VStack>
    </Box>
  );
};
