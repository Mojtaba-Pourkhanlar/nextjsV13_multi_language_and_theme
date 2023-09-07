import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { store } from "../store/index";
import LangUpdate from "@/components/updateLanguage/LangUpdate";
import MuiThemeProvider from "@/components/MuiThemeProvider";
import { CssBaseline } from "@mui/material";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <CssBaseline />
        <LangUpdate>
          <Component {...pageProps} />
        </LangUpdate>
      </MuiThemeProvider>
    </Provider>
  );
};

export default appWithTranslation(App);
