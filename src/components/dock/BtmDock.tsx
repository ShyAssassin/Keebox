import { HStack, VStack, Circle } from "@chakra-ui/react";

export default function BtmDock() {
    return (
        <Circle size="100%">
            <VStack align="center">
                <HStack pos="fixed" bottom="0" w="80%" bg="white" color="black" p="1rem">
                    <h1>test</h1>
                </HStack>
            </VStack>
        </Circle>
    );
}
