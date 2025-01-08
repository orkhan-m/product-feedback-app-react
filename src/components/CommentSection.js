import styles from "./styles/CommentSection.module.css";
import returnIcon from "../assets/return_icon.svg";
import SingleFeedback from "./SingleFeedback";
import CommentReply from "./CommentReply";
import { useState } from "react";

export default function CommentSection({
  setCommentSectionView,
  setItemToEdit,
  setEditFeedbackView,
  handleLikeClicks,
  itemToComment,
  feedbackDataArray,
  setFeedbackDataArray,
  countComments,
  currentUser,
}) {
  const [charachterLimit, setCharachterLimit] = useState(250);
  const [newComment, setNewComment] = useState("");
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);

  const currentItem = feedbackDataArray.find(
    (item) => item.index === itemToComment.index
  );

  function handleSubmit(e) {
    e.preventDefault();

    let valid = true;

    if (newComment.trim() === "") {
      setIsCommentEmpty(true);
      valid = false;
    } else {
      setIsCommentEmpty(false);
    }

    if (valid === false) return;

    const newCommentObject = {
      id: currentItem.commentsArray.length
        ? currentItem.commentsArray[currentItem.commentsArray.length - 1].id + 1
        : 1,
      user: currentUser,
      text: newComment,
      commentsArray: [],
    };

    const updatedCommentsArray = [
      ...currentItem.commentsArray,
      newCommentObject,
    ];
    const updatedItem = { ...currentItem, commentsArray: updatedCommentsArray };

    const updatedFeedbackDataArray = feedbackDataArray.map((item) =>
      item.index === currentItem.index ? updatedItem : item
    );

    setFeedbackDataArray(updatedFeedbackDataArray);
    setNewComment(""); // Clear the input field
    setCharachterLimit(250);
  }

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
          isFromCommentSection={true}
          feedbackUnitTitleForComment={styles.feedbackUnitTitle}
          feedbackUnitTextForComment={styles.feedbackUnitText}
        />
      </div>
      <div className={styles.commentsBoard}>
        <p className={styles.numberOfComments}>
          {currentItem.commentsArray &&
            countComments(currentItem.commentsArray)}{" "}
          Comments
        </p>
        <CommentReply
          data={currentItem}
          feedbackDataArray={feedbackDataArray}
          setFeedbackDataArray={setFeedbackDataArray}
          currentUser={currentUser}
          itemToComment={itemToComment}
          currentItem={currentItem}
        />
      </div>
      <div className={styles.postComment}>
        <h3 className={styles.addCommentTitle}>Add Comment</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            className={
              isCommentEmpty
                ? `${styles.commentTextArea} ${styles.inputError}`
                : styles.commentTextArea
            }
            maxLength={250}
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
              setCharachterLimit(250 - e.target.value.length);
              setIsCommentEmpty(false);
            }}
            placeholder="Type your comment here"
          ></textarea>
          {isCommentEmpty && (
            <p className={styles.textErrorMessage}>Can't be empty</p>
          )}

          <div className={styles.btnSection}>
            <p
              className={styles.leftCharacters}
            >{`${charachterLimit} characters left`}</p>
            <button
              className={`${styles.btnPostComment} ${styles.btn}`}
              type="submit"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
