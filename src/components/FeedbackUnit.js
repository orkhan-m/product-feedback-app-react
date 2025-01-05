import styles from "./styles/FeedbackUnit.module.css";
import SingleFeedback from "./SingleFeedback";

export default function FeedbackUnit({
  selectedCategory,
  selectedSortOption,
  feedbackDataArray,
  handleLikeClicks,
  setCommentSectionView,
  setItemToComment,
  countComments,
}) {
  function itemComment(item) {
    setItemToComment(
      feedbackDataArray.find((data) => data.index === item.index)
    );
    setCommentSectionView(true);
  }

  function countTotalComments(commentsArray) {
    if (!commentsArray) return 0;
    return commentsArray.reduce((total, comment) => {
      return total + 1 + countTotalComments(comment.commentsArray);
    }, 0);
  }

  return (
    <>
      {feedbackDataArray
        .filter(
          (data) =>
            selectedCategory === "All" || data.category === selectedCategory
        )
        .sort((a, b) => {
          const aCommentsCount = countTotalComments(a.commentsArray);
          const bCommentsCount = countTotalComments(b.commentsArray);

          if (selectedSortOption === "Most Upvotes") {
            return b.likes - a.likes;
          } else if (selectedSortOption === "Least Upvotes") {
            return a.likes - b.likes;
          } else if (selectedSortOption === "Most Comments") {
            return bCommentsCount - aCommentsCount;
          } else if (selectedSortOption === "Least Comments") {
            return aCommentsCount - bCommentsCount;
          } else {
            return 0;
          }
        })
        .map((data) => (
          <div
            key={data.index}
            className={styles.feedbackUnit}
            onClick={() => itemComment(data)}
          >
            <SingleFeedback
              data={data}
              handleLikeClicks={handleLikeClicks}
              countComments={countComments}
            />
          </div>
        ))}
    </>
  );
}
