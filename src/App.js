import "./index.css";
import { useState } from "react";

import FeedbackBoardIcon from "./components/FeedbackBoardIcon";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter.js";
import Roadmap from "./components/Roadmap.js";
import FeedbackBoard from "./components/FeedbackBoard.js";
import FeedbackUnit from "./components/FeedbackUnit.js";
import CreateNewFeedback from "./components/CreateNewFeedback.js";
import EditFeedback from "./components/EditFeedback.js";
import { feedbackData } from "./data/feedbackData";
import { dropdownSelections } from "./data/sortDropDownSelection";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSortOption, setSelectedSortOption] = useState("Most Upvotes");
  const [addFeedbackView, setAddFeedbackView] = useState(false);
  const [feedbackDataArray, setFeedbackDataArray] = useState(feedbackData);

  const [editFeedbackView, setEditFeedbackView] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  function addFeedback(feedback) {
    setFeedbackDataArray([...feedbackDataArray, feedback]);
  }

  function updateFeedback(index, newFeedback) {
    setFeedbackDataArray((prevData) =>
      prevData.map((item) => (item.index === index ? newFeedback : item))
    );
  }

  function deleteFeedback(index) {
    setFeedbackDataArray((prevData) =>
      prevData.filter((item) => item.index !== index)
    );
  }

  if (!addFeedbackView && !editFeedbackView) {
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
            {feedbackDataArray.length ? (
              <FeedbackUnit
                selectedCategory={selectedCategory}
                selectedSortOption={selectedSortOption}
                feedbackData={feedbackDataArray}
                setFeedbackDataArray={setFeedbackDataArray}
                setEditFeedbackView={setEditFeedbackView}
                setItemToEdit={setItemToEdit}
              />
            ) : (
              <FeedbackBoard setAddFeedbackView={setAddFeedbackView} />
            )}
          </div>
        </div>
      </div>
    );
  } else if (addFeedbackView) {
    return (
      <CreateNewFeedback
        setAddFeedbackView={setAddFeedbackView}
        feedbackData={feedbackDataArray}
        setFeedbackData={setFeedbackDataArray}
        onAddFeedback={addFeedback}
      />
    );
  } else if (editFeedbackView) {
    return (
      <EditFeedback
        setEditFeedbackView={setEditFeedbackView}
        feedbackDataArray={feedbackDataArray}
        itemToEdit={itemToEdit}
        onUpdateFeedback={updateFeedback}
        onDeleteFeedback={deleteFeedback}
      />
    );
  }
}
