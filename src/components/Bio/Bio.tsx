import styles from "./Bio.module.css";
import { useTranslation } from "react-i18next";

export default function Bio() {
  const { t } = useTranslation();
  return (
    <section className={styles.bioContainer}>
      <h2>{t("about me")}</h2>
      <div className={styles.bio}>
        <p>{t("bio p1")}</p>
        <p>{t("bio p2")}</p>
        <p>{t("bio p3")}</p>
      </div>
    </section>
  );
}
