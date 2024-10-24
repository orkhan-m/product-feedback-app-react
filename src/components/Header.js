import { useState } from "react";
import bulbSvg from "../assets/bulb.svg";
import dropdownIcon from "../assets/dropdown_icon.svg";
import dropdownIconReversed from "../assets/dropdown_icon_reversed.svg";
import tickIcon from "../assets/tick_icon.svg";
import styles from "./styles/Header.module.css";

const dropdownSelections = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

export default function Header() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Most Upvotes");

  function toggleDropdown() {
    setDisplayDropdown((prevState) => !prevState); // Toggle dropdown visibility
  }

  function handleSelection(selection) {
    setSelectedOption(selection);
    setDisplayDropdown(false);
  }

  return (
    <div className={styles.navBar}>
      <img className={styles.bulbIcon} src={bulbSvg} alt="Bulb Icon" />
      <p className={styles.navBarSuggestions}>0 Suggestions</p>
      <p className={styles.sortBy} onClick={toggleDropdown}>
        Sort by :{" "}
        <span className={styles.dropdownItems}>
          {selectedOption}{" "}
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
                {selection === selectedOption && (
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
      <button className={styles.btnAddFeedback}>+ Add Feedback</button>
    </div>
  );
}
