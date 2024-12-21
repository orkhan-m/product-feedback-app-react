import { useState } from "react";
import bulbSvg from "../assets/bulb.svg";
import dropdownIcon from "../assets/dropdown_icon.svg";
import dropdownIconReversed from "../assets/dropdown_icon_reversed.svg";
import tickIcon from "../assets/tick_icon.svg";
import styles from "./styles/Header.module.css";

export default function Header({
  selectedSortOption,
  setSelectedSortOption,
  dropdownSelections,
  feedbackDataArray,
  setAddFeedbackView,
}) {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  function toggleDropdown() {
    setDisplayDropdown((prevState) => !prevState); // Toggle dropdown visibility
  }

  function handleSelection(selection) {
    setSelectedSortOption(selection);
    setDisplayDropdown(false);
  }

  return (
    <div className={styles.navBar}>
      <img className={styles.bulbIcon} src={bulbSvg} alt="Bulb Icon" />
      <p className={styles.navBarSuggestions}>
        {feedbackDataArray.length} Suggestions
      </p>
      <p
        className={
          !displayDropdown && feedbackDataArray.length
            ? styles.sortBy
            : styles.sortByDisabled
        }
        onClick={feedbackDataArray.length ? toggleDropdown : null}
      >
        Sort by :{" "}
        <span className={styles.dropdownItems}>
          {selectedSortOption}{" "}
          <img
            src={displayDropdown ? dropdownIconReversed : dropdownIcon}
            alt={displayDropdown ? "Dropdown Icon Reversed" : "Dropdown Icon"}
          ></img>
        </span>
      </p>
      {displayDropdown && (
        <div className={styles.sortDropdown}>
          <ul>
            {dropdownSelections.map((selection) => (
              <li key={selection} onClick={() => handleSelection(selection)}>
                {selection}
                {selection === selectedSortOption && (
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
      <button
        className={styles.btnAddFeedback}
        onClick={() => setAddFeedbackView((prev) => !prev)}
      >
        + Add Feedback
      </button>
    </div>
  );
}
