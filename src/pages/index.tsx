import { Box, Text, Center } from "@chakra-ui/react";
import Greet from "@components/greet";

export default function Index() {
    return (
        <Box>
            <Center>
                <Text fontSize={"6xl"} fontWeight={"semibold"}>
                    Hello World!
                </Text>
            </Center>
            <Greet />
        </Box>
    );
}
