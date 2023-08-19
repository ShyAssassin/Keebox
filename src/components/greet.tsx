import { useState } from "react";
import { Input, Box, HStack, Button, Center, VStack } from "@chakra-ui/react";
import { greet, tauriAvailable } from "@lib/tauri";

export default function Greet() {
    let [input, setInput] = useState<string>("");
    let [output, setOutput] = useState<string>("");
    return (
        <Box>
            <Center>
                <HStack>
                    <Input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <VStack>
                        <Button
                            isDisabled={!tauriAvailable()}
                            onClick={() => {
                                greet(input).then((message: string) => {
                                    console.log(message);
                                    setOutput(message);
                                });
                            }}>
                            Greet
                        </Button>
                    </VStack>
                </HStack>
            </Center>
            <Center>
                <p>{output}</p>
            </Center>
        </Box>
    );
}
