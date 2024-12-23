import styles from "./styles/CommentReply.module.css";
import SingleComment from "./SingleComment";

export default function CommentReply({ data }) {
  return (
    <div className={styles.canvas}>
      {data.commentsArray.length > 0 &&
        data.commentsArray.map((comment) => (
          <div key={comment.id}>
            <SingleComment comment={comment} order={`primary`} />
            {comment.commentsArray.map((secondaryComments) => {
              return (
                <div key={secondaryComments.id}>
                  <SingleComment
                    comment={secondaryComments}
                    order={`secondary`}
                  />
                  {secondaryComments.commentsArray.map((thirdComments) => {
                    return (
                      <div key={thirdComments.id}>
                        <SingleComment
                          comment={thirdComments}
                          order={`third`}
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
  );
}
