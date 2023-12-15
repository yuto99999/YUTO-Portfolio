import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timeLine } from "../../data/TimelineList";
import "../molecule/Timeline.css";
import { Typography, styled } from "@mui/material";

type TProps = {
  TimelineList: timeLine[];
};

const TimeLine: React.FC<TProps> = ({ TimelineList }) => {
  return (
    <>
      <VerticalTimeline>
        {TimelineList.map((timeLine) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={timeLine.date}
            iconStyle={{ background: "#000066", color: "#000066" }}
            key={timeLine.title}
          >
            <Title className="vertical-timeline-element-title">
              {timeLine.title}
            </Title>
            <Description>{timeLine.description}</Description>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

const Title = styled("h3")(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: "bold",
  fontFamily: "游ゴシック",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: 600,
  fontFamily: "游ゴシック",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

export default TimeLine;
