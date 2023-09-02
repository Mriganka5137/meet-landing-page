import styles from "./SectionBreak.module.css";
function SectionBreak({ number }) {
  return (
    <div className={styles.section_break}>
      <div className={styles["vertical-line"]}>
        <div className={styles["circle"]}>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
    </div>
  );
}

export default SectionBreak;
