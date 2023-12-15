import { Avatar, Typography, styled } from "@mui/material";

export function Introduction() {
  return (
    <StyledIntroBox>
      <StyledContainer>
        <StyledTitle>Yuto Mizusawa</StyledTitle>
        <StyledSubtitle>
          水澤祐翔 / 成蹊大学経営学部 / Peach.Tech
        </StyledSubtitle>
      </StyledContainer>
      <StyledImage>
        <StyledAvatar src="/img/About/yuto1.jpg" />
      </StyledImage>
    </StyledIntroBox>
  );
}

const StyledIntroBox = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#F5F4EE",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    marginTop: "3rem",
  },
}));

const StyledContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "25rem",
  paddingLeft: "12%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "5%",
    height: "13rem",
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: "#000066",
  fontWeight: "bold",
  fontSize: "5.5rem",
  letterSpacing: 2,
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color: "#000066",
  fontWeight: "bold",
  fontSize: "1.3rem",
  fontFamily: "游ゴシック",
  letterSpacing: 2.3,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
    letterSpacing: 1.7,
  },
}));

const StyledImage = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "12%",
  [theme.breakpoints.down("sm")]: {
    paddingRight: "5%",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "17rem",
  height: "17rem",
  [theme.breakpoints.down("sm")]: {
    width: "6rem",
    height: "6rem",
  },
}));

export default Introduction;
