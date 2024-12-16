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
  const [feedbackDataArray, setFeedbackDataArray] = useState(feedbackData);

  function addFeedback(feedback) {
    setFeedbackDataArray([...feedbackDataArray, feedback]);
  }

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
            <Roadmap feedbackData={feedbackDataArray} />
          </div>
          <div>
            <Header
              selectedSortOption={selectedSortOption}
              setSelectedSortOption={setSelectedSortOption}
              dropdownSelections={dropdownSelections}
              feedbackData={feedbackDataArray}
              setAddFeedbackView={setAddFeedbackView}
            />
            {feedbackData.length ? (
              <FeedbackUnit
                selectedCategory={selectedCategory}
                selectedSortOption={selectedSortOption}
                feedbackData={feedbackDataArray}
                setFeedbackDataArray={setFeedbackDataArray}
              />
            ) : (
              <FeedbackBoard setAddFeedbackView={setAddFeedbackView} />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <CreateNewFeedback
        setAddFeedbackView={setAddFeedbackView}
        feedbackData={feedbackDataArray}
        setFeedbackData={setFeedbackDataArray}
        onAddFeedback={addFeedback}
      />
    );
  }
}
