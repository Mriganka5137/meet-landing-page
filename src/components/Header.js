import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.primary_heading}>
        Group Chat <br /> for Everyone
      </h1>
      <p className={styles.description}>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className={styles.button_group}>
        <button className={`${styles.btn} ${styles.btn_download}`}>
          Download <span>v1.3</span>
        </button>

        <button className={`${styles.btn} ${styles.btn_question}`}>
          What is it?
        </button>
      </div>
    </header>
  );
}

export default Header;
