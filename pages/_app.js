import { ThemeProvider } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import store from "../utils/store";
import theme from "../utils/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}
