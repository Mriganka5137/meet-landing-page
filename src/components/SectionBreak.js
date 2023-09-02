import styles from "./SectionBreak.module.css";
function SectionBreak({ number, margin }) {
  const style = {
    marginTop: `${margin}rem`,
  };
  return (
    <div style={style}>
      <div className={styles["vertical-line"]}>
        <div className={styles["circle"]}>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
    </div>
  );
}

export default SectionBreak;
