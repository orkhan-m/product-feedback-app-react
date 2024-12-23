import { useEffect } from "react";
import styles from "./styles/SingleFeedback.module.css";
import increaseLikes from "../assets/increase_likes.svg";
import increaseLikesWhite from "../assets/increase_likes_white.svg";
import commentBubble from "../assets/comment_bubble.svg";

export default function SingleFeedback({ data, handleLikeClicks }) {
  // Function to count comments recursively up to 3 levels deep
  const countComments = (commentsArray, level = 1) => {
    if (level > 3 || !commentsArray) return 0;
    return commentsArray.reduce(
      (count, comment) =>
        count + 1 + countComments(comment.commentsArray, level + 1),
      0
    );
  };

  const numberOfComments = countComments(data.commentsArray);

  return (
    <div>
      <div className={styles.content}>
        <button
          className={data.liked ? styles.likesLiked : styles.likes}
          onClick={(e) => {
            e.stopPropagation();
            handleLikeClicks(data.index);
          }}
        >
          <img
            src={data.liked ? increaseLikesWhite : increaseLikes}
            alt="Like the Feedback"
            className={styles.increaseLikesBtn}
          />
          <p
            className={
              data.liked ? styles.numberOfLikesLiked : styles.numberOfLikes
            }
          >
            {data.likes}
          </p>
        </button>
        <div className={styles.feebackText}>
          <h3 className={styles.feedbackUnitTitle}>{data.title}</h3>
          <p className={styles.feedbackUnitText}>{data.text}</p>
          <p className={styles.feedbackUnitCategory}>{data.category}</p>
        </div>
        <div className={styles.numberOfComments}>
          <img src={commentBubble} alt="Comment Bubble Icon" />
          <p
            className={
              numberOfComments
                ? styles.numberOfCommentsDigit
                : styles.numberOfCommentsDigitZero
            }
          >
            {numberOfComments}
          </p>
        </div>
      </div>
    </div>
  );
}
