import "./index.css";

import FeedbackBoardIcon from "./components/FeedbackBoardIcon";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter.js";
import Roadmap from "./components/Roadmap.js";
import FeedbackBoard from "./components/FeedbackBoard.js";
import FeedbackUnit from "./components/FeedbackUnit.js";
import { feedbackData } from "./data/feedbackData";

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
          {console.log(feedbackData.length)}
          {feedbackData.length ? <FeedbackUnit /> : <FeedbackBoard />}
        </div>
      </div>
    </div>
  );
}
