import React from "react";
import TimelineCard from "./TimelineCard";
import { timeline } from "./assets/timeline";

function Timeline() {
  const educationCards = timeline.map((item, i) => (
    <TimelineCard
      title={item.title}
      media={item.media}
      cardDetailedText={item.cardDetailedText}
      gradDate={item.gradDate}
      description={item.description}
      key={i}
    />
  ));
  return (
    <div className="education-container">
      <div className="education-card-wrapper">{educationCards}</div>
    </div>
  );
}

export default Timeline;
