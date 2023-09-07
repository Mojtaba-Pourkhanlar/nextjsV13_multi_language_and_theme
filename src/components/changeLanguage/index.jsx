import React, { useEffect } from "react";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";

export default function ChangeLang() {
  const router = useRouter();

  const lang = i18n?.language;
  useEffect(() => {
    document.body.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  const switchLanguage = (newLocale) => {
    i18n.changeLanguage(newLocale);
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => switchLanguage("fa")}>Switch to Persion</button>
      <div style={{ margin: "0 20px" }}>
        <button onClick={() => switchLanguage("es")}>Switch to Spanish</button>
      </div>
      <button onClick={() => switchLanguage("en")}>Switch to English</button>
    </div>
  );
}
