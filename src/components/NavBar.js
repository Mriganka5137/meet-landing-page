import styles from "./NavBar.module.css";
import logo from "../assets/logo.svg";
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" className={styles.logo} />
    </nav>
  );
}

export default NavBar;
