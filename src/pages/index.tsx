import { Box, Text, Center } from "@chakra-ui/react";

const Greet = dynamic(() => import("@components/greet"), { ssr: false });
export default function Index() {
    return (
        <Box>
            <Center>
                <Text fontSize={"6xl"} fontWeight={"semibold"} fontFamily={"monospace"}>
                    Hello World!
                </Text>
            </Center>
        </Box>
    );
}
