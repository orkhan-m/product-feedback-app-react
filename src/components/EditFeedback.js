import styles from "./styles/EditFeedback.module.css";
import returnIcon from "../assets/return_icon.svg";
import editIcon from "../assets/edit_icon.svg";
import dropdownIcon from "../assets/feedback_category_dropdown_icon.svg";
import dropdownIconReverse from "../assets/feedback_category_dropdown_icon_reverse.svg";
import tickIcon from "../assets/tick_icon.svg";
import { useState } from "react";

const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
const statuses = ["Suggestion", "Planned", "In-Progress", "Live"];

export default function EditFeedback({
  setEditFeedbackView,
  itemToEdit,
  onUpdateFeedback,
  onDeleteFeedback,
}) {
  const [selectedCategory, setSelectedCategory] = useState(itemToEdit.category);
  const [categorySelectDropdown, setCategorySelectDropdown] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(itemToEdit.status);
  const [statusSelectDropdown, setStatusSelectDropdown] = useState(false);

  const [title, setTitle] = useState(itemToEdit.title);
  const [detail, setDetail] = useState(itemToEdit.text);
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
    setSelectedStatus("Planned");
    setCategorySelectDropdown(false);
    setStatusSelectDropdown(false);
    setIsTitleEmpty(false);
    setIsDetailEmpty(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let valid = true;

    if (title.trim() === "") {
      setIsTitleEmpty(true);
      valid = false;
    } else {
      setIsTitleEmpty(false);
    }

    if (detail.trim() === "") {
      setIsDetailEmpty(true);
      valid = false;
    } else {
      setIsDetailEmpty(false);
    }

    if (!valid) return;

    const editedFeedback = {
      index: itemToEdit.index,
      title: title,
      text: detail,
      likes: itemToEdit.likes,
      comments: itemToEdit.comments,
      category: selectedCategory,
      status: selectedStatus,
      liked: itemToEdit.liked,
    };

    onUpdateFeedback(itemToEdit.index, editedFeedback);

    setEditFeedbackView(false);
  }

  function handleDelete(e) {
    e.preventDefault();
    // Delete item
    onDeleteFeedback(itemToEdit.index);
    setEditFeedbackView(false);
  }

  return (
    <div className={styles.mainCanvas}>
      <div
        className={styles.goBackSection}
        onClick={() => setEditFeedbackView(false)}
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
          <img src={editIcon} alt="Edit Icon" />
        </div>
        <form onSubmit={handleSubmit}>
          <label className={styles.mainLabel}>
            Editing '{itemToEdit.title}'
          </label>
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
              categorySelectDropdown
                ? styles.categorySelectActive
                : styles.categorySelect
            }
            onClick={() => setCategorySelectDropdown((prev) => !prev)}
          >
            <p className={styles.categorySelectText}>{selectedCategory}</p>
            <img
              className={styles.dropdownIcon}
              src={categorySelectDropdown ? dropdownIconReverse : dropdownIcon}
              alt="Dropdown Icon"
            />
            {categorySelectDropdown && (
              <div className={styles.dropdown}>
                <ul>
                  {categories.map((selection) => (
                    <li
                      key={selection}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(selection);
                        setCategorySelectDropdown(false);
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
          <label className={styles.updateStatusLabel}>Update Status</label>
          <label className={styles.updateStatusDescription}>
            Change feature state
          </label>
          <div
            className={
              statusSelectDropdown
                ? styles.statusSelectActive
                : styles.statusSelect
            }
            onClick={() => setStatusSelectDropdown((prev) => !prev)}
          >
            <p className={styles.statusSelectText}>{selectedStatus}</p>
            <img
              className={styles.dropdownIcon}
              src={statusSelectDropdown ? dropdownIconReverse : dropdownIcon}
              alt="Dropdown Icon"
            />
            {statusSelectDropdown && (
              <div className={styles.dropdownStatus}>
                <ul>
                  {statuses.map((selection) => (
                    <li
                      key={selection}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStatus(selection);
                        setStatusSelectDropdown(false);
                      }}
                    >
                      {selection}
                      {selection === selectedStatus && (
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
            <div>
              <button
                className={`${styles.deleteBtn} ${styles.btn}`}
                type="submit"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
            <div className={styles.cancelAndAddFeedbackBtnContainer}>
              <button
                className={`${styles.cancelBtn} ${styles.btn}`}
                onClick={cancelBtn}
              >
                Cancel
              </button>
              <button
                className={`${styles.addFeedbackBtn} ${styles.btn}`}
                type="submit"
              >
                Add Feedback
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
