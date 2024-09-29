import "./index.css";

import FeedbackBoard from "./components/FeedbackBoard";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter.js";
import Roadmap from "./components/Roadmap.js";

export default function App() {
  return (
    <div>
      <div className="page-top">
        <div>
          <FeedbackBoard />
          <CategoryFilter />
          <Roadmap />
        </div>
        <Header />
      </div>
    </div>
  );
}
