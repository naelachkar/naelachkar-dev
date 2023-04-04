import { useTranslation } from "react-i18next";
import "./NavBar.css";

type NavBarButtonProps = {
  text: string;
};

function NavBarButton(props: NavBarButtonProps) {
  const { text } = props;
  return <button>{text}</button>;
}

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <nav>
      <NavBarButton text={t("home")} />
      <NavBarButton text={t("projects")} />
      <NavBarButton text={t("contact")} />
    </nav>
  );
}
