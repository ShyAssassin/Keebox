import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <Component {...pageProps} key={router.route} />
        </div>
    );
}
