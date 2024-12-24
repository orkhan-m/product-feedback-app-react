import styles from "./styles/CommentReply.module.css";
import SingleComment from "./SingleComment";

export default function CommentReply({
  data,
  feedbackDataArray,
  setFeedbackDataArray,
  currentUser,
  itemToComment,
}) {
  return (
    <>
      <div className={styles.canvas}>
        {data.commentsArray.length > 0 &&
          data.commentsArray.map((comment) => (
            <div key={comment.id}>
              <SingleComment
                comment={comment}
                order={`primary`}
                feedbackDataArray={feedbackDataArray}
                setFeedbackDataArray={setFeedbackDataArray}
                currentUser={currentUser}
                data={data}
                itemToComment={itemToComment}
              />
              {comment.commentsArray.map((secondaryComments) => {
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
                    />
                    {secondaryComments.commentsArray.map((thirdComments) => {
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
