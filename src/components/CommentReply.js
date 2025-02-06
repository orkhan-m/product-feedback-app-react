import styles from "./styles/CommentReply.module.css";
import SingleComment from "./SingleComment";

export default function CommentReply({
  data,
  feedbackDataArray,
  setFeedbackDataArray,
  currentUser,
  itemToComment,
  currentItem,
}) {
  const getVerticalLineStyle = (comment) => {
    // if (comment.commentsArray && comment.commentsArray.length > 0) {
    //   return { bottom: "4rem" }; // Adjust as needed to align with the last comment's avatar
    // }
    return { bottom: "4rem" };
  };

  return (
    <>
      <div className={styles.canvas}>
        {data.commentsArray && // NOTE added to fix error with missing commentsArray
          data.commentsArray.length > 0 &&
          data.commentsArray.map((comment, index) => (
            // <div key={comment.id}>
            // NOTE end
            <div key={comment.id} className={styles.commentContainer}>
              {comment.commentsArray && comment.commentsArray.length > 0 && (
                <div
                  className={styles.verticalLine}
                  style={getVerticalLineStyle(comment)}
                ></div>
              )}
              {/* NOTE end */}
              <SingleComment
                comment={comment}
                order={`primary`}
                feedbackDataArray={feedbackDataArray}
                setFeedbackDataArray={setFeedbackDataArray}
                currentUser={currentUser}
                data={data}
                itemToComment={itemToComment}
                currentItem={currentItem}
                className={index !== 0 ? styles.borderTop : ""}
              />
              {comment.commentsArray &&
                comment.commentsArray.map((secondaryComments) => {
                  return (
                    <div key={secondaryComments.id}>
                      <SingleComment
                        comment={secondaryComments}
                        order={`secondary`}
                        feedbackDataArray={feedbackDataArray}
                        setFeedbackDataArray={setFeedbackDataArray}
                        currentUser={currentUser}
                        data={data}
                        itemToComment={itemToComment}
                        currentItem={currentItem}
                      />
                      {secondaryComments.commentsArray &&
                        secondaryComments.commentsArray.map((thirdComments) => {
                          return (
                            <div key={thirdComments.id}>
                              <SingleComment
                                comment={thirdComments}
                                order={`third`}
                                feedbackDataArray={feedbackDataArray}
                                setFeedbackDataArray={setFeedbackDataArray}
                                currentUser={currentUser}
                                data={data}
                                itemToComment={itemToComment}
                                currentItem={currentItem}
                              />
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
          ))}
      </div>
    </>
  );
}
