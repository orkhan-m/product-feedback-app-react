const features = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

export default function FeedbackBoard() {
  return (
    <div className="side-boxes">
      <div className="feedback-board">
        <div className="feedback-board-circle-one"></div>
        <div className="feedback-board-circle-two"></div>
        <div className="board-text">
          <p className="board-main-text">Frontend Mentor</p>
          <p className="board-secondary-text">Feedback Board</p>
        </div>
      </div>
      {/* NOTE Category Filter */}
      <div className="category-filter">
        {features.map((feature) => (
          <div key={feature} className="feedback-features-filter">
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}
