import styles from "./styles/FeedbackBoardIcon.module.css";

export default function FeedbackBoardIcon() {
  return (
    <div>
      <div className={styles.feedback_board}>
        <div className={styles.feedback_board_circle_one}></div>
        <div className={styles.feedback_board_circle_two}></div>
        <div className={styles.board_text}>
          <p className={styles.board_main_text}>Frontend Mentor</p>
          <p className={styles.board_secondary_text}>Feedback Board</p>
        </div>
      </div>
    </div>
  );
}
