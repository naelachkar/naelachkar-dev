import "./Hello.css";
import { useTranslation } from "react-i18next";

export default function Hello() {
  const { t } = useTranslation();
  return (
    <div className="hello">
      <h1>{t("hello")}</h1>
      <h1>
        {t("my name is")}{" "}
        <span className="h1-gradient">{t("Naël Achkar")}</span>.
      </h1>
    </div>
  );
}
