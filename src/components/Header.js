import bulbSvg from "../assets/bulb.svg";
import dropdownIcon from "../assets/dropdown_icon.svg";
import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.nav_bar}>
      <img className={styles.bulb_icon} src={bulbSvg} alt="Bulb Icon" />
      <p className={styles.nav_bar_suggestions}>0 Suggestions</p>
      <p className={styles.sort_by}>
        Sort by :{" "}
        <span className={styles.dropdown_items}>
          Most Upvotes <img src={dropdownIcon} alt="Dropdown Icon"></img>
        </span>
      </p>
      <button className={styles.btn_add_feedback}>+ Add Feedback</button>
    </div>
  );
}
