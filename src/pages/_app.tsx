import Head from "next/head";
import type { AppProps } from "next/app";
import { invoke } from "@tauri-apps/api/tauri";
import theme from "@lib/theme";
import { ChakraProvider } from "@chakra-ui/react";

if (typeof window !== "undefined") {
    // FIXME: dont shit yourself if tauri isnt present
    document.addEventListener("DOMContentLoaded", () => {
        invoke<void>("plugin:splashscreen|set_frontend_ready").then(() => {
            console.log("Frontend Initialised");
        });
    });
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
