import styles from "./styles/CategoryFilter.module.css";

const features = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

export default function CategoryFilter() {
  return (
    <div className={styles.categoryFilter}>
      {features.map((feature) => (
        <button key={feature} className={styles.feedbackFeaturesFilter}>
          {feature}
        </button>
      ))}
    </div>
  );
}
