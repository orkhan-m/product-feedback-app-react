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
import { feedbackData, currentUser } from "./data/feedbackData";
import { dropdownSelections } from "./data/sortDropDownSelection";
import RoadmapPage from "./components/RoadmapPage.js";
import CommentSection from "./components/CommentSection.js";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSortOption, setSelectedSortOption] = useState("Most Upvotes");

  const [addFeedbackView, setAddFeedbackView] = useState(false);
  const [feedbackDataArray, setFeedbackDataArray] = useState(feedbackData);

  const [editFeedbackView, setEditFeedbackView] = useState(false);
  const [commentSectionView, setCommentSectionView] = useState(false);

  const [itemToEdit, setItemToEdit] = useState(null);
  const [itemToComment, setItemToComment] = useState(null);

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
    setCommentSectionView(false);
  }

  function handleLikeClicks(index) {
    setFeedbackDataArray((prevData) =>
      prevData.map((item) =>
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

  function itemEdit(item) {
    // NOTE to be used for editiong
    setItemToEdit(item);
    setEditFeedbackView(true);
  }

  function countComments(commentsArray, level = 1) {
    if (level > 3 || !commentsArray) return 0;

    return commentsArray.reduce(
      (count, comment) =>
        count + 1 + countComments(comment.commentsArray, level + 1),
      0
    );
  }

  if (
    !addFeedbackView &&
    !editFeedbackView &&
    !commentSectionView &&
    !roadmapView
  ) {
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
              feedbackDataArray={feedbackDataArray}
              setRoadmapView={setRoadmapView}
            />
          </div>
          <div>
            <Header
              selectedSortOption={selectedSortOption}
              setSelectedSortOption={setSelectedSortOption}
              dropdownSelections={dropdownSelections}
              feedbackDataArray={feedbackDataArray}
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
                setFeedbackDataArray={setFeedbackDataArray}
                setEditFeedbackView={setEditFeedbackView}
                setCommentSectionView={setCommentSectionView}
                setItemToEdit={setItemToEdit}
                feedbackDataArray={feedbackDataArray}
                handleLikeClicks={handleLikeClicks}
                setItemToComment={setItemToComment}
                itemToComment={itemToComment}
                countComments={countComments}
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
        feedbackDataArray={feedbackDataArray}
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
        itemEdit={itemEdit}
        countComments={countComments}
      />
    );
  } else if (commentSectionView) {
    return (
      <CommentSection
        setCommentSectionView={setCommentSectionView}
        setItemToEdit={setItemToEdit}
        setEditFeedbackView={setEditFeedbackView}
        handleLikeClicks={handleLikeClicks}
        itemToComment={itemToComment}
        countComments={countComments}
        feedbackDataArray={feedbackDataArray}
        setFeedbackDataArray={setFeedbackDataArray}
        currentUser={currentUser}
      />
    );
  }
}
