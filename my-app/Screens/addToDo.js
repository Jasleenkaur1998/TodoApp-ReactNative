import { View, Text, Image, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { Box, Button, Center, Flex, Icon, Input, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { AuthContext } from '../Context/AuthContext';

export default function AddToDo({ navigation }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const { userInfo } = useContext(AuthContext);

    console.log(userInfo.token);

    const addItem = () => {
        axios
            .post(`${BASE_URL_DEV}/todos/add`, {
                title,
                description,
                priority
            },
            {
                headers: {
                    "Authorization": `Bearer ${userInfo.token}`
                }
            })
            .then((res) => {
                Alert.alert(res.data.message);
                navigation.navigate("home");
            })
            .catch((e) => {
                console.log(`register error ${e}`);
            });
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
                    onChange={(e) => setTitle(e.nativeEvent.text)}
                    borderRadius={10}
                    color={"primary.900"}
                    marginBottom={3}
                    w={{
                        base: 300,
                        md: "100%",
                    }}
                    height={12}
                    value={title}
                    InputLeftElement={
                        <Icon
                            as={<MaterialIcons name="person" />}
                            size={5}
                            ml="2"
                            color="muted.400"
                        />
                    }
                    placeholder="Enter Title Here"
                />

                <Input
                    borderColor={"primary.900"}
                    onChange={(e) => setDescription(e.nativeEvent.text)}
                    borderRadius={10}
                    color={"primary.900"}
                    marginBottom={3}
                    w={{
                        base: 300,
                        md: "100%",
                    }}
                    height={12}
                    value={description}
                    InputLeftElement={
                        <Icon
                            as={<MaterialIcons name="person" />}
                            size={5}
                            ml="2"
                            color="muted.400"
                        />
                    }
                    placeholder="Enter Description Here"
                />

                <Input
                    borderColor={"primary.900"}
                    onChange={(e) => setPriority(e.nativeEvent.text)}
                    borderRadius={10}
                    color={"primary.900"}
                    marginBottom={3}
                    w={{
                        base: 300,
                        md: "100%",
                    }}
                    height={12}
                    value={priority}
                    InputLeftElement={
                        <Icon
                            as={<MaterialIcons name="person" />}
                            size={5}
                            ml="2"
                            color="muted.400"
                        />
                    }
                    placeholder="Enter Priority Here"
                />

                <Button
                    marginTop={10}
                    onPress={() => addItem()}
                    bgColor={"primary.900"}
                    style={{ width: 300, paddingTop: 16, paddingBottom: 16 }}
                    rounded="full"
                >
                    <Flex>
                        {/* <Icon name="cog" /> */}
                        <Text style={{ color: "#fff", fontSize: 20 }}>
                           Add To Do
                        </Text>
                    </Flex>
                </Button>

            </Center>

        </VStack>
    </Box>
)

};
