import styles from "./styles/FeedbackUnit.module.css";
import increaseLikes from "../assets/increase_likes.svg";
import commentBubble from "../assets/comment_bubble.svg";

export default function FeedbackUnit() {
  return (
    <div className={styles.feedbackUnit}>
      <div className={styles.content}>
        <button className={styles.likes}>
          <img
            src={increaseLikes}
            alt="Like the Feedback"
            className={styles.increaseLikesBtn}
          />
          <p className={styles.numberOfLikes}>15</p>
        </button>
        <div className={styles.feebackText}>
          <h3 className={styles.feedbackUnitTitle}>Add tags for solutions</h3>
          <p className={styles.feedbackUnitText}>
            Easier to search for solutions based on a specific stack.
          </p>
          <p className={styles.feedbackUnitCategory}>Enhancement</p>
        </div>
        <div className={styles.numberOfComments}>
          <img src={commentBubble} alt="Comment Bubble Icon" />
          <p className={styles.numberOfCommentsDigit}>2</p>
        </div>
      </div>
    </div>
  );
}
