import { ThemeProvider } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import theme from "../utils/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
