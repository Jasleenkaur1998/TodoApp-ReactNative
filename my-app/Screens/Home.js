import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box, Center, Fab, Flex, Heading, Icon, ScrollView, VStack } from "native-base";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import StoryBook from "../components/StoryBook";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const { userInfo } = useContext(AuthContext);
  let [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    try {
      const data = await axios.get(`${BASE_URL_DEV}/todos`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setTodoList(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VStack space={4}>
      <ScrollView>
      <Heading padding={3} color={"primary.900"} size="3xl">
        ThingsToDo
      </Heading>
      <Heading padding={3} color={"primary.900"} size="2xl">
        Hello {userInfo.user.name}
      </Heading>
      <Heading padding={3} color={"primary.800"} size="xl">
        {new Date().toDateString()}
      </Heading>

      <Flex direction="row" flexWrap="wrap">
        {todoList.map((todo, index) => {
          return <StoryBook key={index} data={todo}></StoryBook>
        })}
      </Flex>

      <Fab onPress={() => navigation.navigate('add')} position={'absolute'} bottom={20} icon={<Icon color="white" as={<AntDesign name="plus" />} size={4} />} label={<Text color="white" fontSize="sm">
      </Text>} />
      </ScrollView>

    </VStack>
  );
}
