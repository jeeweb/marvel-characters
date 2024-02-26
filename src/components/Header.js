import MarveLogo from "./Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MarveLogo />
      </h1>
    </header>
  );
}

export default Header;
