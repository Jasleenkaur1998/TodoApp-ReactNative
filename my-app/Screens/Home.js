import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box, Center, Flex, Heading, VStack } from "native-base";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import StoryBook from "../components/StoryBook";

export default function Home() {
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
      <Heading color={"primary.900"} size="3xl">
        ThingsToDo
      </Heading>
      <Heading color={"primary.900"} size="2xl">
        Hello {userInfo.user.name}
      </Heading>
      <Heading color={"primary.800"} size="xl">
        {new Date().toDateString()}
      </Heading>

      <Flex direction="row" flexWrap="wrap">
        {todoList.map((todo) => {
          return <StoryBook data={todo}></StoryBook>
        })}
      </Flex>
    </VStack>
);
}
