import React, { useState } from "react";
import styles from "./styles/FeedbackUnit.module.css";
import increaseLikes from "../assets/increase_likes.svg";
import increaseLikesWhite from "../assets/increase_likes_white.svg";
import commentBubble from "../assets/comment_bubble.svg";
import { feedbackData } from "../data/feedbackData";

export default function FeedbackUnit() {
  const [initialFeedbackData, setInitialFeedbackData] = useState(feedbackData);

  function handleLikeClicks(index) {
    setInitialFeedbackData((prevData) =>
      prevData.map((item, i) =>
        i === index
          ? {
              ...item,
              likes: item.likes + (item.liked ? -1 : 1),
              liked: !item.liked,
            }
          : item
      )
    );
  }

  return (
    <>
      {initialFeedbackData.map((data, index) => (
        <div key={index} className={styles.feedbackUnit}>
          <div className={styles.content}>
            <button
              className={data.liked ? styles.likesLiked : styles.likes}
              onClick={() => handleLikeClicks(index)}
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
              <p className={styles.feedbackUnitCategory}>Enhancement</p>
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
      ))}
    </>
  );
}
