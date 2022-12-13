import { View } from "react-native";
import React from "react";
import {
  Box,
  Heading,
  useColorModeValue,
  VStack,
  Text,
  Badge,
  Flex,
  Spacer,
} from "native-base";

export default function StoryBook({ data }) {
  const gradColors = useColorModeValue("primary.900", "secondary.300") || [
    "primary.700",
    "white",
  ];

  return (
    <Box
      bg={"primary.900"}
      //   background="red.100"
      borderRadius="20"
      padding={6}
      flexBasis="45%"
      margin={"2%"}
    >
      <VStack>
        <Flex>
          <Heading fontSize="md" color={"primary.100"}>{data.title}</Heading>
          <Text fontSize="sm">{data.description}</Text>
          <Text fontSize="xs">{data.due}</Text>
          <Box width={50}>
            <Badge colorScheme="primary.100" style={{ borderRadius: 20 }}>
              {data.priority}
            </Badge>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
}
