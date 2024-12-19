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
import RoadmapPage from "./components/RoadmapPage.js";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSortOption, setSelectedSortOption] = useState("Most Upvotes");
  const [addFeedbackView, setAddFeedbackView] = useState(false);
  const [feedbackDataArray, setFeedbackDataArray] = useState(feedbackData);

  const [editFeedbackView, setEditFeedbackView] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const [roadmapView, setRoadmapView] = useState(false);

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

  function handleLikeClicks(index) {
    setFeedbackDataArray((prevData) =>
      prevData.map((item, _) =>
        item.index === index
          ? {
              ...item,
              likes: item.likes + (item.liked ? -1 : 1),
              liked: !item.liked,
            }
          : item
      )
    );
  }

  function handleSelection(feature) {
    setSelectedCategory(feature);
  }

  if (!addFeedbackView && !editFeedbackView && !roadmapView) {
    return (
      <div>
        <div className="pageTop">
          <div>
            <FeedbackBoardIcon />
            <CategoryFilter
              selectedCategory={selectedCategory}
              handleSelection={handleSelection}
            />
            <Roadmap
              feedbackData={feedbackDataArray}
              setRoadmapView={setRoadmapView}
            />
          </div>
          <div>
            <Header
              selectedSortOption={selectedSortOption}
              setSelectedSortOption={setSelectedSortOption}
              dropdownSelections={dropdownSelections}
              feedbackData={feedbackDataArray}
              setAddFeedbackView={setAddFeedbackView}
            />
            {(
              selectedCategory === "All"
                ? feedbackDataArray.length
                : feedbackDataArray.filter(
                    (data) => data.category === selectedCategory
                  ).length
            ) ? (
              <FeedbackUnit
                selectedCategory={selectedCategory}
                selectedSortOption={selectedSortOption}
                feedbackData={feedbackDataArray}
                setFeedbackDataArray={setFeedbackDataArray}
                setEditFeedbackView={setEditFeedbackView}
                setItemToEdit={setItemToEdit}
                handleLikeClicks={handleLikeClicks}
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
  } else if (roadmapView) {
    return (
      <RoadmapPage
        setRoadmapView={setRoadmapView}
        setAddFeedbackView={setAddFeedbackView}
        feedbackDataArray={feedbackDataArray}
        handleLikeClicks={handleLikeClicks}
      />
    );
  }
}
