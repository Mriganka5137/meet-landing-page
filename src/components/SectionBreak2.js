import styles from "./SectionBreak2.module.css";
function SectionBreak2() {
  return (
    <div className={styles.section_break}>
      <div className={styles["vertical-line"]}>
        <div className={styles["circle"]}>
          <span className={styles.number}>02</span>
        </div>
      </div>
    </div>
  );
}

export default SectionBreak2;
