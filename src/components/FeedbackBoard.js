import feedbackBoardSvg from "../assets/feedback_board_blank.svg";
import styles from "./styles/FeedbackBoard.module.css";

export default function FeedbackBoard() {
  return (
    <div className={styles.feedback_board}>
      <div className={styles.feedbackboard_content}>
        <img
          className={styles.feedback_board_blank_icon}
          src={feedbackBoardSvg}
          alt="Blank Icon"
        />
        <h3 className={styles.feedbackboard_title}>
          There is no feedback yet.
        </h3>
        <p className={styles.feedbackboard_text}>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <button className={styles.btn_add_feedback}>+ Add Feedback</button>
      </div>
    </div>
  );
}
