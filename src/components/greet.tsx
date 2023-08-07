import { invoke } from '@tauri-apps/api/tauri'
import { useState } from "react";

export default function Greet(){
    let [input, setInput] = useState<string>("");
    let [output, setOutput] = useState<string>("");
    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                invoke("greet", { name: input }).then((message: string) => {
                    setOutput(message);
                });
            }}>Greet</button>
            <p>{output}</p>
        </div>
    )
}