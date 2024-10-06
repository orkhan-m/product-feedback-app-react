import bulbSvg from "../assets/bulb.svg";
import dropdownIcon from "../assets/dropdown_icon.svg";
import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.navBar}>
      <img className={styles.bulbIcon} src={bulbSvg} alt="Bulb Icon" />
      <p className={styles.navBarSuggestions}>0 Suggestions</p>
      <p className={styles.sortBy}>
        Sort by :{" "}
        <span className={styles.dropdownItems}>
          Most Upvotes <img src={dropdownIcon} alt="Dropdown Icon"></img>
        </span>
      </p>
      <button className={styles.btnAddFeedback}>+ Add Feedback</button>
    </div>
  );
}
