
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import ProductAppBar from "../components/productappbar";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <ProductAppBar />
        <Component {...pageProps} />
        </SnackbarProvider>
      </Provider>
    </>
  );
}

export default MyApp;