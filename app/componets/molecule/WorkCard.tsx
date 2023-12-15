import * as React from "react";
import { Work } from "../../data/WorkList";
import { Box, Typography, styled, Link } from "@mui/material";
import Border from "../atmos/Border";

type TProps = {
  workCard: Work;
};

const WorkCard: React.FC<TProps> = ({ workCard }) => {
  return (
    <>
      <StyledContainer>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p="3%"
          sx={{
            bgcolor: "#F0EDED",
            borderRadius: "1rem",
          }}
        >
          <StyledImage
            src={`/img/Work/${workCard.imagePath}`}
            alt="workImage"
          />
        </Box>
        <Box ml={{ md: 4, sm: 0 }} p={3}>
          <Title>{workCard.title}</Title>
          <Description>{workCard.details.content}</Description>
          <Description>≼挑戦≽ {workCard.details.challenge}</Description>
          <Description>≼展望≽{workCard.details.outlook}</Description>
          <Description>≼使用言語≽{workCard.details.language}</Description>
          <Description>
            <Link
              href={workCard.details.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {workCard.details.github}
            </Link>
          </Description>
        </Box>
      </StyledContainer>
      <Border />
    </>
  );
};

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "4.5%",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    margin: "3%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  paddingBottom: "5%",
  fontSize: "2.3rem",
  fontWeight: 700,
  fontFamily: "游ゴシック",
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "3%",
    fontSize: "1.5rem",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  paddingBottom: 10,
  fontSize: "1.2rem",
  fontWeight: 500,
  fontFamily: "游ゴシック",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "42vw",
  height: "24.5vw",
  [theme.breakpoints.down("sm")]: {
    width: "84vw",
    height: "49vw",
  },
}));

export default WorkCard;
