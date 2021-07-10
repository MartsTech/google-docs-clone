import "@material-tailwind/react/tailwind.css";
import "@style/globals.css";
import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Google Docs Clone</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
