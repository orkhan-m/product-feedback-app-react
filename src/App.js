import "./index.css";

import FeedbackBoard from "./components/FeedbackBoard";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <div className="page-top">
        <FeedbackBoard />
        <Header />
      </div>
    </div>
  );
}
