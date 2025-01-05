import styles from "./styles/FeedbackBoardIcon.module.css";
// import { useEffect, useState } from "react";
import hamburgerIcon from "../assets/hamburger_icon.svg";
import crossIcon from "../assets/cross_icon.svg";

export default function FeedbackBoardIcon({
  isMobileView,
  isSideMenuOpen,
  setIsSideMenuOpen,
}) {
  return (
    <div>
      <div className={styles.feedbackBoard}>
        <div className={styles.feedbackBoardCircleOne}></div>
        <div className={styles.feedbackBoardCircleTwo}></div>
        <div className={styles.textAndHamburgerIcon}>
          <div className={styles.boardText}>
            <p className={styles.boardMainText}>Frontend Mentor</p>
            <p className={styles.boardSecondaryText}>Feedback Board</p>
          </div>
          {isMobileView ? (
            !isSideMenuOpen ? (
              <img
                className={styles.iconForMobileView}
                src={hamburgerIcon}
                alt="Hamburger Icon"
                onClick={() => setIsSideMenuOpen(true)}
              />
            ) : (
              <img
                className={styles.iconForMobileView}
                src={crossIcon}
                alt="Cross Icon"
                onClick={() => setIsSideMenuOpen(false)}
              />
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
