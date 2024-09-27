import "./index.css";
// import { useState } from "react";
import bulbSvg from "./assets/bulb.svg";
import dropdownIcon from "./assets/dropdown_icon.svg";
import manWithMagnifier from "./assets/man_with_magnifier.svg";

const features = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

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
    <div class="side-boxes">
      <div class="feedback-board">
        <div class="feedback-board-circle-one"></div>
        <div class="feedback-board-circle-two"></div>
        <div class="board-text">
          <p class="board-main-text">Frontend Mentor</p>
          <p class="board-secondary-text">Feedback Board</p>
        </div>
      </div>
      {/* NOTE Category Filter */}
      <div class="category-filter">
        {features.map((feature) => (
          <div className="feedback-features-filter">{feature}</div>
        ))}
      </div>
      <div class="roadmap">
        <div class="roadmap-title-and-view">
          <p class="roadmap-title">Roadmap</p>
          <p class="roadmap-view">View</p>
        </div>
        <div class="roadmap-list">
          <div class="roadmap-list-planned">
            <p class="roadmap-circle">&#9679;</p>
            <p class="roadmap-name">Planned</p>
            <p class="roadmap-number">0</p>
          </div>
          <div class="roadmap-list-in-progress">
            <p class="roadmap-circle">&#9679;</p>
            <p class="roadmap-name">In-Progress</p>
            <p class="roadmap-number">0</p>
          </div>
          <div class="roadmap-list-live">
            <p class="roadmap-circle">&#9679;</p>
            <p class="roadmap-name">Live</p>
            <p class="roadmap-number">0</p>
          </div>
        </div>
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
        Sort by :{" "}
        <span class="dropdown-items">
          Most Upvotes <img src={dropdownIcon} alt="Dropdown Icon"></img>
        </span>
      </p>
      <button class="btn-add-feedback">+ Add Feedback</button>
    </div>
  );
}
