import styles from "./styles/CommentSection.module.css";
import returnIcon from "../assets/return_icon.svg";
import SingleFeedback from "./SingleFeedback";

export default function CommentSection({
  setCommentSectionView,
  setItemToEdit,
  setEditFeedbackView,
  handleLikeClicks,
  itemToComment,
  feedbackDataArray,
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
        <button
          className={`${styles.editButton} ${styles.btn}`}
          onClick={() => {
            setItemToEdit(itemToComment);
            setEditFeedbackView(true);
          }}
        >
          Edit Feedback
        </button>
      </div>
      {feedbackDataArray
        .filter((data) => data.index === itemToComment.index)
        .map((data) => (
          <div className={styles.feedbackUnit} key={data.index}>
            <SingleFeedback data={data} handleLikeClicks={handleLikeClicks} />
          </div>
        ))}
    </div>
  );
}
