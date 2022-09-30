import "styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "store";
import { Provider } from "react-redux";
import Navbar from "components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <main className='min-h-[100vh] pt-16 container mx-auto'>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;
