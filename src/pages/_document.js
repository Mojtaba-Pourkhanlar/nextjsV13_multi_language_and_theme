import { Html, Head, Main, NextScript } from "next/document";
import { i18n } from "next-i18next";

export default function Document() {
  const lang = i18n.language;
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <Html lang={lang} dir={dir}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
