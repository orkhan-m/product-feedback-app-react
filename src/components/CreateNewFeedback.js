import styles from "./styles/CreateNewFeedback.module.css";
import returnIcon from "../assets/return_icon.svg";
import plusIcon from "../assets/plus_icon.svg";
import dropdownIcon from "../assets/feedback_category_dropdown_icon.svg";
import dropdownIconReverse from "../assets/feedback_category_dropdown_icon_reverse.svg";
import tickIcon from "../assets/tick_icon.svg";
import { useState } from "react";

const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

export default function CreateNewFeedback({
  setAddFeedbackView,
  feedbackData,
  onAddFeedback,
}) {
  const [selectedCategory, setSelectedCategory] = useState("Feature");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [categorySelect, setCategorySelect] = useState(false);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDetailEmpty, setIsDetailEmpty] = useState(false);

  function onInputTitleChange(e) {
    setTitle(e.target.value);
    setIsTitleEmpty(false);
  }

  function onInputDetailChange(e) {
    setDetail(e.target.value);
    setIsDetailEmpty(false);
  }

  function cancelBtn(e) {
    e.preventDefault();
    setTitle("");
    setDetail("");
    setSelectedCategory("Feature");
    setCategorySelect(false);
    setIsTitleEmpty(false);
    setIsDetailEmpty(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("1");

    let valid = true;

    if (title.trim() === "") {
      setIsTitleEmpty(true);
      valid = false;
    } else {
      setIsTitleEmpty(false);
    }

    console.log("2");

    if (detail.trim() === "") {
      setIsDetailEmpty(true);
      valid = false;
    } else {
      setIsDetailEmpty(false);
    }

    console.log("3");

    if (!valid) return;

    console.log("4");

    const newFeedback = {
      index: feedbackData.length + 1,
      title,
      text: detail,
      likes: 0,
      comments: 0,
      category: selectedCategory,
    };
    onAddFeedback(newFeedback);

    console.log("5");

    setAddFeedbackView(false);
  }

  // {
  //   index: 6,
  //   title: "Preview images not loading",
  //   text: "Challenge preview images are missing when you apply a filter.",
  //   likes: 3,
  //   comments: 0,
  //   category: "Bug",
  // },

  return (
    <div className={styles.mainCanvas}>
      <div
        className={styles.goBackSection}
        onClick={() => setAddFeedbackView(false)}
      >
        <img
          className={styles.goBackIcon}
          src={returnIcon}
          alt="Return Back Icon"
        />
        <p className={styles.goBackText}>Go Back</p>
      </div>
      <div className={styles.feedbackForm}>
        <div className={styles.feedbackCircle}>
          <img src={plusIcon} alt="Plus Icon" />
        </div>
        <form onSubmit={handleSubmit}>
          <label className={styles.mainLabel}>Create New Feedback</label>
          <label className={styles.titleLabel}>Feedback Title</label>
          <label className={styles.titleDescription}>
            Add a short, descriptive headline
          </label>
          <input
            className={
              !isTitleEmpty
                ? styles.titleInput
                : `${styles.inputError} ${styles.titleInput}`
            }
            type="text"
            value={title}
            onChange={onInputTitleChange}
          />
          {isTitleEmpty && (
            <p className={styles.textErrorMessage}>Can't be empty</p>
          )}
          <label className={styles.categoryLabel}>Category</label>
          <label className={styles.titleDescription}>
            Choose a category for your feedback
          </label>
          <div
            className={
              categorySelect
                ? styles.categorySelectActive
                : styles.categorySelect
            }
            onClick={() => setCategorySelect((prev) => !prev)}
          >
            <p className={styles.categorySelectText}>{selectedCategory}</p>
            <img
              className={styles.dropdownIcon}
              src={categorySelect ? dropdownIconReverse : dropdownIcon}
              alt="Dropdown Icon"
            />
            {categorySelect && (
              <div className={styles.dropdown}>
                <ul>
                  {categories.map((selection) => (
                    <li
                      key={selection}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(selection);
                        setCategorySelect(false);
                      }}
                    >
                      {selection}
                      {selection === selectedCategory && (
                        <img
                          src={tickIcon}
                          alt="Selected"
                          className={styles.tickIcon}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <label className={styles.feedbackDetailLabel}>Feedback Detail</label>
          <label className={styles.feedbackDetailDescription}>
            Include any specific comments on what should be improved, added,
            etc.
          </label>
          <textarea
            // className={styles.feedbackDetailInput}
            className={
              !isDetailEmpty
                ? styles.feedbackDetailInput
                : `${styles.inputError} ${styles.feedbackDetailInput}`
            }
            type="text"
            value={detail}
            onChange={onInputDetailChange}
          />
          {isDetailEmpty && (
            <p className={styles.textErrorMessage}>Can't be empty</p>
          )}
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.cancelBtn} ${styles.btn}`}
              onClick={cancelBtn}
            >
              Cancel
            </button>
            <button
              className={`${styles.addFeedbackBtn} ${styles.btn}`}
              // onSubmit={handleSubmit}
              type="submit"
            >
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}