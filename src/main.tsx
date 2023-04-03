import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// import i18n (needs to be bundled ;))
import "./i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
