import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { store } from "store";
import Navbar from "components/Navbar";
import client from "lib/api";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Navbar />
        <main className='min-h-[100vh] pt-16 container mx-auto'>
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
