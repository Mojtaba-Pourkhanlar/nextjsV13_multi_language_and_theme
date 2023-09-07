import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";

export default function Product() {
  const lang = useSelector((state) => state.root.language);
  const productLang = {...lang.common};
  return (
    <>
      <h2>{productLang.bio}</h2>
      <h3>{productLang.wellcome}</h3>
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
