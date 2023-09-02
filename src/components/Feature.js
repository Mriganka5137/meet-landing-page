import styles from "./Feature.module.css";
function Feature() {
  return (
    <section className={styles.feature}>
      <h3 className={styles.subheading}>Built for modern use</h3>
      <h2 className={styles.heading}>Smarter meetings, all in one place</h2>
      <p className={styles.description}>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </section>
  );
}

export default Feature;
