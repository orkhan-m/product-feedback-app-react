import styles from "./styles/CreateNewFeedback.module.css";
import returnIcon from "../assets/return_icon.svg";
import plusIcon from "../assets/plus_icon.svg";
import dropdownIcon from "../assets/feedback_category_dropdown_icon.svg";
import dropdownIconReverse from "../assets/feedback_category_dropdown_icon_reverse.svg";
import tickIcon from "../assets/tick_icon.svg";
import { useState } from "react";

const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

export default function CreateNewFeedback({ setAddFeedbackView }) {
  const [selectedCategory, setSelectedCategory] = useState("Feature");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [categorySelect, setCategorySelect] = useState(false);

  function cancelBtn(e) {
    e.preventDefault();
    setTitle("");
    setDetail("");
    setSelectedCategory("Feature");
    setCategorySelect(false);
  }

  function addFeedbackBtn(e) {
    e.preventDefault();
  }

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
        <form onClick={(e) => e.preventDefault()}>
          <label className={styles.mainLabel}>Create New Feedback</label>
          <label className={styles.titleLabel}>Feedback Title</label>
          <label className={styles.titleDescription}>
            Add a short, descriptive headline
          </label>
          <input
            className={styles.titleInput}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
            className={styles.feedbackDetailInput}
            type="text"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.cancelBtn} ${styles.btn}`}
              onClick={cancelBtn}
            >
              Cancel
            </button>
            <button
              className={`${styles.addFeedbackBtn} ${styles.btn}`}
              onClick={addFeedbackBtn}
            >
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
