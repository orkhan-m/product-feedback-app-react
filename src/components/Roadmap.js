export default function Roadmap() {
  return (
    <div class="roadmap">
      <div class="roadmap-title-and-view">
        <p class="roadmap-title">Roadmap</p>
        <button class="roadmap-view">View</button>
      </div>
      <div class="roadmap-list">
        <div class="roadmap-list-planned">
          <p class="roadmap-circle">&#9679;</p>
          <p class="roadmap-name">Planned</p>
          <p class="roadmap-number">0</p>
        </div>
        <div class="roadmap-list-in-progress">
          <p class="roadmap-circle">&#9679;</p>
          <p class="roadmap-name">In-Progress</p>
          <p class="roadmap-number">0</p>
        </div>
        <div class="roadmap-list-live">
          <p class="roadmap-circle">&#9679;</p>
          <p class="roadmap-name">Live</p>
          <p class="roadmap-number">0</p>
        </div>
      </div>
    </div>
  );
}
