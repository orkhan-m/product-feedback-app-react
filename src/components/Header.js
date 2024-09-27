import bulbSvg from "../assets/bulb.svg";
import dropdownIcon from "../assets/dropdown_icon.svg";

export default function Header() {
  return (
    <div className="nav-bar">
      <img className="bulb-icon" src={bulbSvg} alt="Bulb Icon" />
      <p className="nav-bar-suggestions">0 Suggestions</p>
      <p className="sort-by">
        Sort by :{" "}
        <span className="dropdown-items">
          Most Upvotes <img src={dropdownIcon} alt="Dropdown Icon"></img>
        </span>
      </p>
      <button className="btn-add-feedback">+ Add Feedback</button>
    </div>
  );
}
