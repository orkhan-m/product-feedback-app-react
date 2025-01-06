import styles from "./styles/RoadmapPage.module.css";
import returnIcon from "../assets/return_icon_white.svg";
import RoadmapFeedbackUnit from "./RoadmapFeedbackUnit";
import { useState } from "react";

export default function RoadmapPage({
  setRoadmapView,
  setAddFeedbackView,
  feedbackDataArray,
  handleLikeClicks,
  itemEdit,
  countComments,
  isMobileView,
}) {
  const [selectedStatus, setSelectedStatus] = useState("Planned");

  let description;
  if (selectedStatus === "Planned") {
    description = "Ideas prioritized for research";
  } else if (selectedStatus === "In-Progress") {
    description = "Currently being developed";
  } else {
    description = "Released features";
  }

  let color;
  if (selectedStatus === "Planned") {
    color = "#F49F85";
  } else if (selectedStatus === "In-Progress") {
    color = "#AD1FEA";
  } else {
    color = "#62BCFA";
  }

  const mobileBtnSelected = {
    width: "12.5rem",
    border: "none",
    backgroundColor: "transparent",
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#3A4374",
    letterSpacing: "-0.018",
    borderBottom: `0.4rem solid ${
      selectedStatus === "Planned"
        ? "#F49F85"
        : selectedStatus === "In-Progress"
        ? "#AD1FEA"
        : "#62BCFA"
    }`,
  };

  const mobileBtnDeselected = {
    width: "12.5rem",
    border: "none",
    backgroundColor: "transparent",
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "rgba(58, 67, 116, 0.4)",
    letterSpacing: "-0.018",
    borderBottom: "0.1rem solid rgba(140, 146, 179, 0.25)",
  };

  if (isMobileView) {
    return (
      <div className={styles.roadmapPage}>
        <div className={styles.roadmapHeader}>
          <div className={styles.roadmapText}>
            <div
              className={styles.goBackSection}
              onClick={() => setRoadmapView(false)}
            >
              <img src={returnIcon} alt="Return Icon" />
              <span>Go back</span>
            </div>
            <div className={styles.roadmapTitleSection}>
              <p className={styles.roadmapTitle}>Roadmap</p>
            </div>
          </div>
          <button
            className={styles.addFeedbackButton}
            onClick={() => setAddFeedbackView(true)}
          >
            + Add Feedback
          </button>
        </div>
        <div className={styles.mobileSelectionPanel}>
          <button
            style={
              selectedStatus === "Planned"
                ? mobileBtnSelected
                : mobileBtnDeselected
            }
            onClick={() => setSelectedStatus("Planned")}
          >
            Planned (
            {
              feedbackDataArray.filter((data) => data.status === "Planned")
                .length
            }
            )
          </button>
          <button
            style={
              selectedStatus === "In-Progress"
                ? mobileBtnSelected
                : mobileBtnDeselected
            }
            onClick={() => setSelectedStatus("In-Progress")}
          >
            In-progress (
            {
              feedbackDataArray.filter((data) => data.status === "In-Progress")
                .length
            }
            )
          </button>
          <button
            style={
              selectedStatus === "Live"
                ? mobileBtnSelected
                : mobileBtnDeselected
            }
            onClick={() => setSelectedStatus("Live")}
          >
            Live (
            {feedbackDataArray.filter((data) => data.status === "Live").length})
          </button>
        </div>
        <div className={styles.titleAndDescription}>
          <h3 className={styles.columnTitle}>{`${selectedStatus} (${
            feedbackDataArray.filter((data) => data.status === selectedStatus)
              .length
          })`}</h3>
          <p className={styles.columnDescription}>{description}</p>
        </div>
        <RoadmapFeedbackUnit // NOTE customize roadmap feedback unit
          feedbackDataArray={feedbackDataArray}
          handleLikeClicks={handleLikeClicks}
          status={selectedStatus}
          color={color}
          itemEdit={itemEdit}
          countComments={countComments}
        />
      </div>
    );
  }

  return (
    <div className={styles.roadmapPage}>
      <div className={styles.roadmapHeader}>
        <div className={styles.roadmapText}>
          <div
            className={styles.goBackSection}
            onClick={() => setRoadmapView(false)}
          >
            <img src={returnIcon} alt="Return Icon" />
            <span>Go back</span>
          </div>
          <div className={styles.roadmapTitleSection}>
            <p className={styles.roadmapTitle}>Roadmap</p>
          </div>
        </div>

        <button
          className={styles.addFeedbackButton}
          onClick={() => setAddFeedbackView(true)}
        >
          + Add Feedback
        </button>
      </div>
      <div className={styles.mainBody}>
        <div className={`${styles.columnPlanned} ${styles.column}`}>
          <h3 className={styles.columnTitle}>
            Planned (
            {
              feedbackDataArray.filter((data) => data.status === "Planned")
                .length
            }
            )
          </h3>
          <p className={styles.columnDescription}>
            Ideas prioritized for research
          </p>
          <RoadmapFeedbackUnit // NOTE customize roadmap feedback unit
            feedbackDataArray={feedbackDataArray}
            handleLikeClicks={handleLikeClicks}
            status="Planned"
            color="#F49F85"
            itemEdit={itemEdit}
            countComments={countComments}
          />
        </div>
        <div className={`${styles.columnInProgress} ${styles.column}`}>
          <h3 className={styles.columnTitle}>
            In-Progress (
            {
              feedbackDataArray.filter((data) => data.status === "In-Progress")
                .length
            }
            )
          </h3>
          <p className={styles.columnDescription}>Currently being developed</p>
          <RoadmapFeedbackUnit // NOTE customize roadmap feedback unit
            feedbackDataArray={feedbackDataArray}
            handleLikeClicks={handleLikeClicks}
            status="In-Progress"
            color="#AD1FEA"
            itemEdit={itemEdit}
            countComments={countComments}
          />
        </div>

        <div className={`${styles.columnLive} ${styles.column}`}>
          <h3 className={styles.columnTitle}>
            Live (
            {feedbackDataArray.filter((data) => data.status === "Live").length})
          </h3>
          <p className={styles.columnDescription}>Released features</p>
          <RoadmapFeedbackUnit // NOTE customize roadmap feedback unit
            feedbackDataArray={feedbackDataArray}
            handleLikeClicks={handleLikeClicks}
            status="Live"
            color="#62BCFA"
            itemEdit={itemEdit}
            countComments={countComments}
          />
        </div>
      </div>
    </div>
  );
}
