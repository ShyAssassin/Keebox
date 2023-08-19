import { Box, Text, Center } from "@chakra-ui/react";
import dynamic from "next/dynamic";
// import Greet from "@components/greet";

const Greet = dynamic(() => import("@components/greet"), { ssr: false });
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
