import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../redux/store";
import "./styles.scss";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const persistor = persistStore(store);

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MantineProvider
            theme={{
              // Override any other properties from default theme
              fontFamily: "Open Sans, sans serif",
              spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
            }}
          >
            <main className="app">
              <Component {...pageProps} />
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
              />
            </main>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default CustomApp;
