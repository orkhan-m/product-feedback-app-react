import { useState } from "react";
import bulbSvg from "../assets/bulb.svg";
import dropdownIcon from "../assets/dropdown_icon.svg";
import styles from "./styles/Header.module.css";

const dropdownSelections = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

export default function Header() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  function toggleDropdown() {
    if (displayDropdown === true) {
      setDisplayDropdown(false);
    } else {
      setDisplayDropdown(true);
    }
  }

  return (
    <div className={styles.navBar}>
      <img className={styles.bulbIcon} src={bulbSvg} alt="Bulb Icon" />
      <p className={styles.navBarSuggestions}>0 Suggestions</p>
      <p className={styles.sortBy} onClick={toggleDropdown}>
        Sort by :{" "}
        <span className={styles.dropdownItems}>
          Most Upvotes <img src={dropdownIcon} alt="Dropdown Icon"></img>
        </span>
      </p>
      {displayDropdown && (
        <div className={styles.sortDropdown}>
          <ui>
            {dropdownSelections.map((selection) => (
              <li key={selection}>{selection}</li>
            ))}
          </ui>
        </div>
      )}
      <button className={styles.btnAddFeedback}>+ Add Feedback</button>
    </div>
  );
}
