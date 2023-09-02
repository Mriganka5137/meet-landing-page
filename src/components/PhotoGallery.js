import styles from "./PhotoGallery.module.css";
import img1 from "../assets/desktop/image-woman-in-videocall.jpg";
import img2 from "../assets/desktop/image-women-videochatting.jpg";
import img3 from "../assets/desktop/image-men-in-meeting.jpg";
import img4 from "../assets/desktop/image-man-texting.jpg";
function PhotoGallery() {
  return (
    <section className={styles.gallery}>
      <img src={img1} alt="woman in videochat" className={styles.img} />
      <img src={img2} alt="woman in videochat" className={styles.img} />
      <img src={img3} alt="woman in videochat" className={styles.img} />
      <img src={img4} alt="woman in videochat" className={styles.img} />
    </section>
  );
}

export default PhotoGallery;
