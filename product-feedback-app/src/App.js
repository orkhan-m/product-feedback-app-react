import "./index.css";
// import { useState } from "react";
import bulbSvg from "./assets/bulb.svg";

export default function App() {
  return (
    <div>
      <div class="page-top">
        <FeedbackBoard />
        <Header />
      </div>
    </div>
  );
}

function FeedbackBoard() {
  return (
    <div class="feedback-board">
      <div class="feedback-board-circle-one"></div>
      <div class="feedback-board-circle-two"></div>
      <div class="board-text">
        <p class="board-main-text">Frontend Mentor</p>
        <p class="board-secondary-text">Feedback Board</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div class="nav-bar">
      <img class="bulb-icon" src={bulbSvg} alt="Bulb Icon" />
      <p class="nav-bar-suggestions">0 Suggestions</p>
      <p class="sort-by">
        Sort by : <span class="dropdown-items">Most Upvotes &#x2304;</span>
      </p>
    </div>
  );
}
