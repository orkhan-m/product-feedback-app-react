import { useEffect } from "react";
import styles from "./styles/SingleFeedback.module.css";
import increaseLikes from "../assets/increase_likes.svg";
import increaseLikesWhite from "../assets/increase_likes_white.svg";
import commentBubble from "../assets/comment_bubble.svg";

export default function SingleFeedback({ data, handleLikeClicks }) {
  useEffect(() => {
    // This effect will run whenever the `data` prop changes
  }, [data]);

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
              data.comments
                ? styles.numberOfCommentsDigit
                : styles.numberOfCommentsDigitZero
            }
          >
            {data.comments}
          </p>
        </div>
      </div>
    </div>
  );
}
