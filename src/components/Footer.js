import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.heading}>Experience more together</h2>
      <p className={styles.description}>
        Stay connected with reliable HD meetings and unlimited one-on-one and
        group video sessions.
      </p>
      <button className={styles.btn}>
        Download <span>v1.3</span>
      </button>
    </footer>
  );
}

export default Footer;
