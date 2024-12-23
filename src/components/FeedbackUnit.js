import styles from "./styles/FeedbackUnit.module.css";
import SingleFeedback from "./SingleFeedback";

export default function FeedbackUnit({
  selectedCategory,
  selectedSortOption,
  feedbackDataArray,
  setItemToEdit,
  handleLikeClicks,
  setCommentSectionView,
  setItemToComment,
  itemToComment,
  countComments,
}) {
  function itemComment(item) {
    setItemToComment(item);
    setCommentSectionView(true);
  }

  return (
    <>
      {feedbackDataArray
        .filter(
          (data) =>
            selectedCategory === "All" || data.category === selectedCategory
        )
        .sort((a, b) => {
          if (selectedSortOption === "Most Upvotes") {
            return b.likes - a.likes;
          } else if (selectedSortOption === "Least Upvotes") {
            return a.likes - b.likes;
          } else if (selectedSortOption === "Most Comments") {
            return b.comments - a.comments;
          } else if (selectedSortOption === "Least Comments") {
            return a.comments - b.comments;
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
