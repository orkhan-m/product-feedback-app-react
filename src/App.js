import "./index.css";

import FeedbackBoardIcon from "./components/FeedbackBoardIcon";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter.js";
import Roadmap from "./components/Roadmap.js";
import FeedbackBoard from "./components/FeedbackBoard.js";
import FeedbackUnit from "./components/FeedbackUnit.js";

export default function App() {
  return (
    <div>
      <div className="pageTop">
        <div>
          <FeedbackBoardIcon />
          <CategoryFilter />
          <Roadmap />
        </div>
        <div>
          <Header />
          <FeedbackBoard />
          <FeedbackUnit />
        </div>
      </div>
    </div>
  );
}
