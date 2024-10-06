import styles from "./styles/FeedbackBoardIcon.module.css";

export default function FeedbackBoardIcon() {
  return (
    <div>
      <div className={styles.feedbackBoard}>
        <div className={styles.feedbackBoardCircleOne}></div>
        <div className={styles.feedbackBoardCircleTwo}></div>
        <div className={styles.boardText}>
          <p className={styles.boardMainText}>Frontend Mentor</p>
          <p className={styles.boardSecondaryText}>Feedback Board</p>
        </div>
      </div>
    </div>
  );
}
