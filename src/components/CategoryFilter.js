import { useState } from "react";
import styles from "./styles/CategoryFilter.module.css";

const features = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSelection(feature) {
    setSelectedCategory(feature);
  }

  return (
    <div className={styles.categoryFilter}>
      {features.map((feature) => (
        <button
          key={feature}
          className={`${styles.feedbackFeaturesFilter} ${
            selectedCategory === feature
              ? styles.feedbackFeaturesFilterSelected
              : ""
          }`}
          onClick={() => {
            handleSelection(feature);
          }}
        >
          {feature}
        </button>
      ))}
    </div>
  );
}
