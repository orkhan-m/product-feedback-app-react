import "./index.css";

import FeedbackBoardIcon from "./components/FeedbackBoardIcon";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter.js";
import Roadmap from "./components/Roadmap.js";

export default function App() {
  return (
    <div>
      <div className="page-top">
        <div>
          <FeedbackBoardIcon />
          <CategoryFilter />
          <Roadmap />
        </div>
        <Header />
      </div>
    </div>
  );
}
