import styles from "./styles/CommentSection.module.css";
import returnIcon from "../assets/return_icon.svg";
import SingleFeedback from "./SingleFeedback";

export default function CommentSection({
  setCommentSectionView,
  setItemToEdit,
  setEditFeedbackView,
}) {
  return (
    <div className={styles.mainBody}>
      <div className={styles.goBackAndEditButton}>
        <div
          className={styles.goBackSection}
          onClick={() => setCommentSectionView(false)}
        >
          <img
            className={styles.goBackIcon}
            src={returnIcon}
            alt="Go Back Icon"
          />
          <p className={styles.goBackText}>Go Back</p>
        </div>
        <button className={`${styles.editButton} ${styles.btn}`}>
          Edit Feedback
        </button>
      </div>
      <div>
        <SingleFeedback />
      </div>
    </div>
  );
}
