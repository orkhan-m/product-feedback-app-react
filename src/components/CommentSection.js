import styles from "./styles/CommentSection.module.css";
import returnIcon from "../assets/return_icon.svg";
import SingleFeedback from "./SingleFeedback";
import CommentReply from "./CommentReply";

export default function CommentSection({
  setCommentSectionView,
  setItemToEdit,
  setEditFeedbackView,
  handleLikeClicks,
  itemToComment,
  feedbackDataArray,
  countComments,
}) {
  const currentItem = feedbackDataArray.find(
    (item) => item.index === itemToComment.index
  );

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
            setItemToEdit(currentItem);
            setEditFeedbackView(true);
          }}
        >
          Edit Feedback
        </button>
      </div>
      <div className={styles.feedbackUnit}>
        <SingleFeedback
          data={currentItem}
          handleLikeClicks={handleLikeClicks}
          countComments={countComments}
        />
      </div>
      <div className={styles.commentsBoard}>
        <p className={styles.numberOfComments}>
          {countComments(currentItem.commentsArray)} Comments
        </p>
        <CommentReply data={currentItem} />
      </div>
    </div>
  );
}
