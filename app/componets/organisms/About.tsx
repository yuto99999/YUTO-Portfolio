import TimelineList from "../../data/TimelineList";
import TimeLine from "../molecule/Timeline";
import { Box } from "@mui/material";

const Works = () => {
  return (
    <Box marginTop="3%">
      <TimeLine TimelineList={TimelineList} />
    </Box>
  );
};

export default Works;
