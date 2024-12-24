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
}) {
  const [replyField, setReplyField] = useState(false);
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);
  const [newReply, setNewReply] = useState("");

  const currentItem = feedbackDataArray.find(
    (item) => item.index === itemToComment.index
  );

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

  function handleSubmit(e, secondArgument) {
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
      id: comment.commentsArray.length
        ? comment.commentsArray[comment.commentsArray.length - 1].id + 1
        : 1,
      user: currentUser,
      text: newReply,
      commentsArray: [],
    };

    const updateNestedComments = (commentsArray, parentId, newComment) => {
      return commentsArray.map((c) => {
        if (c.id === parentId) {
          return {
            ...c,
            commentsArray: [...c.commentsArray, newComment],
          };
        } else if (
          Array.isArray(c.commentsArray) &&
          c.commentsArray.length > 0
        ) {
          return {
            ...c,
            commentsArray: updateNestedComments(
              c.commentsArray,
              parentId,
              newComment
            ),
          };
        }
        return c;
      });
    };

    const updatedData = {
      ...data,
      commentsArray: updateNestedComments(
        data.commentsArray,
        comment.id,
        newCommentObject
      ),
    };

    const updatedFeedbackDataArray = feedbackDataArray.map((item) =>
      item.index === data.index ? updatedData : item
    );

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

  const errorText = {
    position: "absolute",
    fontSize: "1.4rem",
    color: "#d73737",
    top: "8.4rem",
    left: order === "primary" ? "10.4rem" : "14.9rem",
  };

  return (
    <>
      <div className={styles[`${order}UserInfoAndReply`]}>
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
