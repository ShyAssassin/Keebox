import { Box, Text, Center } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import BtmDock from "@components/dock/BtmDock";


const Greet = dynamic(() => import("@components/greet"), { ssr: false });
export default function Index() {
    return (
        <Box>
            <Center>
                <Text fontSize={"6xl"} fontWeight={"semibold"} fontFamily={"monospace"}>
                    Hello World!
                </Text>
            </Center>
            <Greet />
            <BtmDock />
        </Box>
    );
}
