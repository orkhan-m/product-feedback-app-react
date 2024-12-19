import styles from "./styles/Roadmap.module.css";

export default function Roadmap({ feedbackData, setRoadmapView }) {
  const plannedCount = feedbackData.filter(
    (data) => data.status === "Planned"
  ).length;
  const inProgressCount = feedbackData.filter(
    (data) => data.status === "In-Progress"
  ).length;
  const liveCount = feedbackData.filter(
    (data) => data.status === "Live"
  ).length;

  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmapTitleAndView}>
        <p className={styles.roadmapTitle}>Roadmap</p>
        <button
          className={
            feedbackData.length
              ? styles.roadmapView
              : styles.roadmapViewDisabled
          }
          onClick={feedbackData.length ? () => setRoadmapView(true) : null}
        >
          View
        </button>
      </div>
      <div className={styles.roadmapList}>
        <div className={styles.roadmapListPlanned}>
          <p className={styles.roadmapCircle}>&#9679;</p>
          <p className={styles.roadmapName}>Planned</p>
          <p className={styles.roadmapNumber}>{plannedCount}</p>
        </div>
        <div className={styles.roadmapListInProgress}>
          <p className={styles.roadmapCircle}>&#9679;</p>
          <p className={styles.roadmapName}>In-Progress</p>
          <p className={styles.roadmapNumber}>{inProgressCount}</p>
        </div>
        <div className={styles.roadmapListLive}>
          <p className={styles.roadmapCircle}>&#9679;</p>
          <p className={styles.roadmapName}>Live</p>
          <p className={styles.roadmapNumber}>{liveCount}</p>
        </div>
      </div>
    </div>
  );
}
