import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { store } from "../store/index";
import LangUpdate from "@/components/updateLanguage/LangUpdate";

const App = ({ Component, pageProps }) => {
  

  return (
    <Provider store={store}>
      <LangUpdate>
        <Component {...pageProps} />
      </LangUpdate>
    </Provider>
  );
};

export default appWithTranslation(App);
