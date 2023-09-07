import Head from "next/head";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";

export default function Home() {
  const lang = useSelector((state) => state.root.language);
  const mainLang = { ...lang.common };
  return (
    <>
      <Head>
        <title>Multi Language</title>
        <meta name="description" content="Modiran Khodro - MVM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>{mainLang.bio}</h2>
        <h3>{mainLang.wellcome}</h3>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
