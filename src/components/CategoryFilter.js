// import { useState } from "react";
import styles from "./styles/CategoryFilter.module.css";
import { features } from "../data/categoryFilterData";

export default function CategoryFilter({ selectedCategory, handleSelection }) {
  return (
    <div className={styles.categoryFilter}>
      {features.map((features) => (
        <button
          key={features}
          className={`${styles.feedbackFeaturesFilter} ${
            selectedCategory === features
              ? styles.feedbackFeaturesFilterSelected
              : ""
          }`}
          onClick={() => {
            handleSelection(features);
          }}
        >
          {features}
        </button>
      ))}
    </div>
  );
}
