import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav>
      <div className={styles.name}>
        <span>Naël Achkar Portfolio</span>
      </div>
      <div className={styles.links}>
        <a>Technologies</a>
        <a>Projects</a>
        <a>About me</a>
      </div>
      <div className={styles.socialMedias}>
        <a>LI</a>
        <a>GH</a>
      </div>
    </nav>
  );
}
