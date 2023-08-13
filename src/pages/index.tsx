import { Box, Text, Center } from "@chakra-ui/react";
import BtmDock from "@components/dock/BtmDock";

export default function Index() {
    return (
        <Box>
            <Center>
                <Text fontSize={"6xl"} fontWeight={"semibold"} fontFamily={"monospace"}>
                    Hello World!
                </Text>
            </Center>
            <BtmDock />
        </Box>
    );
}
