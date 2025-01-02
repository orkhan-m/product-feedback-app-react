import styles from "./styles/SingleComment.module.css";
import { useState } from "react";

export default function SingleComment({
  comment,
  order,
  feedbackDataArray,
  setFeedbackDataArray,
  currentUser,
  data,
  itemToComment,
  currentItem,
  className, // Accept the className prop
}) {
  const [replyField, setReplyField] = useState(false);
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);
  const [newReply, setNewReply] = useState("");

  const highlightText = (text) => {
    const parts = text.split(/(@\w+)/g); // Split text by words starting with @
    return parts.map((part, index) =>
      part.startsWith("@") ? (
        <span key={index} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const getNextId = (commentsArray) => {
    let maxId = 0;
    const traverseComments = (comments) => {
      comments.forEach((comment) => {
        if (comment.id > maxId) {
          maxId = comment.id;
        }
        if (comment.commentsArray && comment.commentsArray.length > 0) {
          traverseComments(comment.commentsArray);
        }
      });
    };
    traverseComments(commentsArray);
    return maxId + 1;
  };

  function handleSubmit(e) {
    e.preventDefault();

    let valid = true;

    if (newReply.trim().length === 0) {
      setIsCommentEmpty(true);
      valid = false;
    } else {
      setIsCommentEmpty(false);
    }

    if (valid === false) return;

    const newCommentObject = {
      id: getNextId(currentItem.commentsArray),
      user: currentUser,
      text: newReply,
      commentsArray: [],
    };

    const updateComments = (commentsArray, commentId) => {
      return commentsArray.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            commentsArray: [...(comment.commentsArray || []), newCommentObject],
          };
        } else {
          return {
            ...comment,
            commentsArray: updateComments(
              comment.commentsArray || [],
              commentId
            ),
          };
        }
      });
    };

    const updatedFeedbackDataArray = feedbackDataArray.map((item) => {
      if (item.index === data.index) {
        return {
          ...item,
          commentsArray: updateComments(item.commentsArray, comment.id),
        };
      }
      return item;
    });

    setFeedbackDataArray(updatedFeedbackDataArray);
    setNewReply(""); // Clear the input field
    setReplyField(false); // Hide the reply field
  }

  function handleReplyClick() {
    setReplyField(true);
  }

  function handleCancelClick() {
    setReplyField(false);
    setIsCommentEmpty(false);
  }

  // TODO
  const errorText = {
    position: "absolute",
    fontSize: "1.4rem",
    color: "#d73737",
    top: "8.4rem",
    left: order === "primary" ? "10.4rem" : "14.9rem",
  };

  return (
    <>
      <div className={`${styles[`${order}UserInfoAndReply`]} ${className}`}>
        <img
          src={`profile_pictures/${comment.user.avatar}`}
          alt="User Avatar"
          className={styles.avatar}
        />
        <div className={styles.nameAndUsername}>
          <p className={styles.name}>{comment.user.name}</p>
          <p className={styles.username}>@{comment.user.userName}</p>
        </div>
        {!(order === "third") && (
          <button
            className={!replyField ? styles.replyBtn : styles.cancelBtn}
            onClick={!replyField ? handleReplyClick : handleCancelClick}
          >
            {`${!replyField ? "Reply" : "Cancel"}`}
          </button>
        )}
      </div>
      <p className={styles[`${order}Comment`]}>{highlightText(comment.text)}</p>
      {replyField && (
        <form
          className={styles.replyBox}
          onSubmit={(e) => handleSubmit(e, order)}
        >
          <textarea
            className={
              isCommentEmpty
                ? `${styles.replyTextarea} ${
                    styles[`${order}MarginTextarea`]
                  } ${styles.inputError}`
                : `${styles.replyTextarea} ${styles[`${order}MarginTextarea`]}`
            }
            placeholder="Type your comment here"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          ></textarea>
          {isCommentEmpty && <p style={errorText}>Can't be empty</p>}

          <button className={`${styles.postCommentBtn}`} type="submit">
            Post Reply
          </button>
        </form>
      )}
    </>
  );
}
