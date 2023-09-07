import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";

export default function Product() {
  const lang = useSelector((state) => state.root.language);
  const productLang = {...lang.common};
  return (
    <>
      <h5>{productLang.bio}</h5>
      <h5>{productLang.wellcome}</h5>
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
