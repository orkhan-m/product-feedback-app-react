import styles from "./styles/CommentReply.module.css";

export default function CommentReply({ data }) {
  return (
    <div className={styles.canvas}>
      {data.commentsArray.length > 0 && (
        <>
          <div className={styles.userInfoAndReply}>
            <img
              src={`profile_pictures/${data.commentsArray[0].user.avatar}`}
              alt="User Avatar"
              className={styles.avatar}
            />
            <div className={styles.nameAndUsername}>
              <p className={styles.name}>{data.commentsArray[0].user.name}</p>
              <p className={styles.username}>
                @{data.commentsArray[0].user.userName}
              </p>
            </div>
            <button className={styles.replyBtn}>Reply</button>
          </div>
          <div class={styles.primaryComment}>{data.commentsArray[0].text}</div>
        </>
      )}
    </div>
  );
}
