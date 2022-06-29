import "@material-tailwind/react/tailwind.css";
import "@style/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Google Docs Clone</title>
      </Head>
      {/*@ts-ignore*/}
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
