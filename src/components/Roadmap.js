import styles from "./styles/Roadmap.module.css";

export default function Roadmap() {
  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmapTitleAndView}>
        <p className={styles.roadmapTitle}>Roadmap</p>
        <button className={styles.roadmapView}>View</button>
      </div>
      <div className={styles.roadmapList}>
        <div className={styles.roadmapListPlanned}>
          <p className={styles.roadmapCircle}>&#9679;</p>
          <p className={styles.roadmapName}>Planned</p>
          <p className={styles.roadmapNumber}>0</p>
        </div>
        <div className={styles.roadmapListInProgress}>
          <p className={styles.roadmapCircle}>&#9679;</p>
          <p className={styles.roadmapName}>In-Progress</p>
          <p className={styles.roadmapNumber}>0</p>
        </div>
        <div className={styles.roadmapListLive}>
          <p className={styles.roadmapCircle}>&#9679;</p>
          <p className={styles.roadmapName}>Live</p>
          <p className={styles.roadmapNumber}>0</p>
        </div>
      </div>
    </div>
  );
}
