import styles from "./styles/CommentReply.module.css";

export default function SingleComment({ comment, order }) {
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
          <button className={styles.replyBtn}>Reply</button>
        )}
      </div>
      <p className={styles[`${order}Comment`]}>{comment.text}</p>`
    </>
  );
}
