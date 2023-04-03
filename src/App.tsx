import { useTranslation } from "react-i18next";
import "./App.css";

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t("hello")}</h1>
      <h1>
        {t("my name is")}{" "}
        <span className="h1-gradient">{t("Naël Achkar")}</span>.
      </h1>
    </div>
  );
}
