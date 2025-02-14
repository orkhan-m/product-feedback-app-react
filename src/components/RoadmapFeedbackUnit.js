import styles from "./styles/RoadmapFeedbackUnit.module.css";
import increaseLikes from "../assets/increase_likes.svg";
import increaseLikesWhite from "../assets/increase_likes_white.svg";
import commentBubble from "../assets/comment_bubble.svg";

export default function RoadmapFeedbackUnit({
  feedbackDataArray,
  handleLikeClicks,
  status,
  color,
  itemEdit,
  countComments,
}) {
  const boxTopBorderColor = {
    borderTop: `0.5rem solid ${color}`,
  };

  const dotStyle = {
    backgroundColor: color,
    height: "0.8rem",
    width: "0.8rem",
    borderRadius: "50%",
  };

  const data = feedbackDataArray.filter((data) => data.status === status);

  return data.map((feedback) => {
    return (
      <div
        style={boxTopBorderColor}
        className={styles.boxStyle}
        key={feedback.index}
      >
        <div className={styles.dotAndStatus}>
          <div style={dotStyle}></div>
          <span className={styles.status}>{status}</span>
        </div>
        <p className={styles.feedbackTitle} onClick={() => itemEdit(feedback)}>
          {feedback.title}
        </p>
        <p className={styles.feedbackDescription}>{feedback.text}</p>
        <p className={styles.feedbackCategory}>{feedback.category}</p>
        <div className={styles.feedbackLikesAndComments}>
          <button
            className={
              !feedback.liked
                ? styles.iconAndNumberOfLikes
                : styles.iconAndNumberOfLikesLiked
            }
            onClick={(e) => {
              e.stopPropagation();
              handleLikeClicks(feedback.index);
            }}
          >
            <img
              src={!feedback.liked ? increaseLikes : increaseLikesWhite}
              alt="Arrow Up"
            />
            <p>{feedback.likes}</p>
          </button>
          <div className={styles.iconAndNumberOfComments}>
            <img src={commentBubble} alt="Comment Bubble" />
            <p
              style={
                countComments(feedback.commentsArray)
                  ? null
                  : { opacity: "0.5" }
              }
            >
              {countComments(feedback.commentsArray)}
            </p>
          </div>
        </div>
      </div>
    );
  });
}
