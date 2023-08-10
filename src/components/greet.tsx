import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import { Input, Box, HStack, Button, Center, VStack } from "@chakra-ui/react";

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
                            onClick={() => {
                                invoke("greet", { name: input }).then((message: string) => {
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
