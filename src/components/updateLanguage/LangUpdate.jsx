import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { fetchDictionary } from "@/store/Actions/Root";
import ChangeLang from "../changeLanguage/index";

export default function LangUpdate(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const { locale } = router;
    console.log("locale", locale);
    fetch(`/locales/${locale}/common.json`)
      .then((response) => response.json())
      .then((data) => setTranslations(data));
  }, [router]);

  dispatch(fetchDictionary(translations));

  return (
    <div>
      {props.children}
      <ChangeLang />
    </div>
  );
}
