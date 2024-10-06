import feedbackBoardSvg from "../assets/feedback_board_blank.svg";
import styles from "./styles/FeedbackBoard.module.css";

export default function FeedbackBoard() {
  return (
    <div className={styles.feedbackBoard}>
      <div className={styles.feedbackboardContent}>
        <img
          className={styles.feedbackBoardBlankIcon}
          src={feedbackBoardSvg}
          alt="Blank Icon"
        />
        <h3 className={styles.feedbackboardTitle}>There is no feedback yet.</h3>
        <p className={styles.feedbackboardText}>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <button className={styles.btnAddFeedback}>+ Add Feedback</button>
      </div>
    </div>
  );
}
