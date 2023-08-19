import Head from "next/head";
import type { AppProps } from "next/app";
import theme from "@lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { setFrontendReady } from "@lib/tauri";

if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        setFrontendReady().then(() => {
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
