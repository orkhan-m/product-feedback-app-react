import styles from "./styles/CategoryFilter.module.css";

const features = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

export default function CategoryFilter() {
  return (
    <div className={styles.category_filter}>
      {features.map((feature) => (
        <button key={feature} className={styles.feedback_features_filter}>
          {feature}
        </button>
      ))}
    </div>
  );
}
