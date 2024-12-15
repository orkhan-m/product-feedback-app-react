import "./index.css";
import { useState } from "react";

import FeedbackBoardIcon from "./components/FeedbackBoardIcon";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter.js";
import Roadmap from "./components/Roadmap.js";
import FeedbackBoard from "./components/FeedbackBoard.js";
import FeedbackUnit from "./components/FeedbackUnit.js";
import CreateNewFeedback from "./components/CreateNewFeedback.js";
import { feedbackData } from "./data/feedbackData";
import { dropdownSelections } from "./data/sortDropDownSelection";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSortOption, setSelectedSortOption] = useState("Most Upvotes");
  const [addFeedbackView, setAddFeedbackView] = useState(false);

  if (!addFeedbackView) {
    return (
      <div>
        <div className="pageTop">
          <div>
            <FeedbackBoardIcon />
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <Roadmap feedbackData={feedbackData} />
          </div>
          <div>
            <Header
              selectedSortOption={selectedSortOption}
              setSelectedSortOption={setSelectedSortOption}
              dropdownSelections={dropdownSelections}
              feedbackData={feedbackData}
              setAddFeedbackView={setAddFeedbackView}
            />
            {feedbackData.length ? (
              <FeedbackUnit
                selectedCategory={selectedCategory}
                selectedSortOption={selectedSortOption}
                feedbackData={feedbackData}
              />
            ) : (
              <FeedbackBoard setAddFeedbackView={setAddFeedbackView} />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <CreateNewFeedback setAddFeedbackView={setAddFeedbackView} />;
  }
}
