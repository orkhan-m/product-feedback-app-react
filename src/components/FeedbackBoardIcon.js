import styles from "./styles/FeedbackBoardIcon.module.css";
// import { useEffect, useState } from "react";
// import hamburgerIcon from "../assets/hamburger_icon.svg";
// import crossIcon from "../assets/cross_icon.svg";

export default function FeedbackBoardIcon() {
  // const [isMobileView, setIsMobileView] = useState(false);

  // const updateScreenSize = () => {
  //   setIsMobileView(window.matchMedia("(max-width: 37.5rem)").matches);
  // };

  // useEffect(() => {
  //   updateScreenSize();
  //   window.addEventListener("resize", updateScreenSize);
  //   return () => window.removeEventListener("resize", updateScreenSize);
  // }, []);

  return (
    <div>
      <div className={styles.feedbackBoard}>
        <div className={styles.feedbackBoardCircleOne}></div>
        <div className={styles.feedbackBoardCircleTwo}></div>
        <div className={styles.boardText}>
          <p className={styles.boardMainText}>Frontend Mentor</p>
          <p className={styles.boardSecondaryText}>Feedback Board</p>
        </div>
        {/* {isMobileView && <img src={hamburgerIcon} alt="Hamburger Icon" />} */}
      </div>
    </div>
  );
}
