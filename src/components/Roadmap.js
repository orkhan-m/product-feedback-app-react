import styles from "./styles/Roadmap.module.css";

export default function Roadmap() {
  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmap_title_and_view}>
        <p className={styles.roadmap_title}>Roadmap</p>
        <button className={styles.roadmap_view}>View</button>
      </div>
      <div className={styles.roadmap_list}>
        <div className={styles.roadmap_list_planned}>
          <p className={styles.roadmap_circle}>&#9679;</p>
          <p className={styles.roadmap_name}>Planned</p>
          <p className={styles.roadmap_number}>0</p>
        </div>
        <div className={styles.roadmap_list_in_progress}>
          <p className={styles.roadmap_circle}>&#9679;</p>
          <p className={styles.roadmap_name}>In-Progress</p>
          <p className={styles.roadmap_number}>0</p>
        </div>
        <div className={styles.roadmap_list_live}>
          <p className={styles.roadmap_circle}>&#9679;</p>
          <p className={styles.roadmap_name}>Live</p>
          <p className={styles.roadmap_number}>0</p>
        </div>
      </div>
    </div>
  );
}
