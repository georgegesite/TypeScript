import timeline from "../data/timeline";
import TimelineData from "./TimelineData";
import TimelineTitle from "./TimelineTitle";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <TimelineTitle>Timeline</TimelineTitle>
        {timeline.map((item) => (
          <TimelineData
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
