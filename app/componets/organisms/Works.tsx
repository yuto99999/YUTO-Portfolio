import { Box, Grid } from "@mui/material";
import WorkCard from "../molecule/WorkCard";
import { WorkList } from "../../data/WorkList";

const Works = () => {
  return (
    <Box>
      {WorkList.map((workCard) => (
        <Grid item key={workCard.imagePath}>
          <WorkCard workCard={workCard} />
        </Grid>
      ))}
    </Box>
  );
};

export default Works;
