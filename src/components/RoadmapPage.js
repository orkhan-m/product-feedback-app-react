import styles from "./styles/RoadmapPage.module.css";
import returnIcon from "../assets/return_icon_white.svg";
import RoadmapFeedbackUnit from "./RoadmapFeedbackUnit";

export default function RoadmapPage({
  setRoadmapView,
  setAddFeedbackView,
  feedbackDataArray,
  handleLikeClicks,
  itemEdit,
  countComments,
}) {
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
        <div className={`${styles.columndPlanned} ${styles.column}`}>
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
        <div className={`${styles.columndInProgress} ${styles.column}`}>
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

        <div className={`${styles.columndLive} ${styles.column}`}>
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
