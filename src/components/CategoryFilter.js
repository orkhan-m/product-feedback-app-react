const features = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

export default function CategoryFilter() {
  return (
    <div className="category-filter">
      {features.map((feature) => (
        <div key={feature} className="feedback-features-filter">
          {feature}
        </div>
      ))}
    </div>
  );
}
