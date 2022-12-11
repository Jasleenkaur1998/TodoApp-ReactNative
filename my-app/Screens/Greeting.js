import { Image, Text } from "react-native";
import React from "react";
import { Box, Button, Center, Flex, Heading, Icon, ScrollView, Spacer, VStack } from "native-base";

export default function Greeting({ navigation }) {
  return <Box flex="1" alignItems="center" justifyContent="center" safeAreaTop>
      <VStack space={2.5} w="100%" px="3">

        <Center>
          <Heading fontSize={40} color={'primary.900'}>Things</Heading>
          <Heading fontSize={40} color={'primary.800'}>ToDo</Heading>

          <Image
            style={{
              width: 300,
            }}
            source={require("../assets/background.png")}
            resizeMode="contain"
          />

          <Button onPress={() => navigation.navigate("user-login")} bgColor={'primary.800'} style={{ width: 300, marginBottom: 20,  paddingTop: 16, paddingBottom: 16 }} iconLeft dark>
            <Flex>

              {/* <Icon name="cog" /> */}
              <Text style={{ color: "#fff", fontSize: 20 }}>Sign in</Text>
            </Flex>

          </Button>


          <Button onPress={() => navigation.navigate("user-signup")} bgColor={'primary.900'} style={{ width: 300, paddingTop: 16, paddingBottom: 16 }} iconLeft dark>
            <Flex>

              {/* <Icon name="cog" /> */}
              <Text style={{ color: "#fff", fontSize: 20 }}>Create an Account</Text>
            </Flex>

          </Button>

        </Center>
      </VStack>
  </Box>
}
