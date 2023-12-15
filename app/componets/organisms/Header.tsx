import { Typography, styled } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

export function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Portfolio</StyledTitle>
      <StyledIcon>
        <Link
          href="https://github.com/yuto99999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImage src={"/img/Icon/github.svg"} alt="githubアイコン" />
        </Link>
        <Link
          href="https://twitter.com/yuto99999e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledTwitter />
        </Link>
        <Link
          href="https://github.com/yuto99999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImage src={"/img/Icon/canva.svg"} alt="canvaアイコン" />
        </Link>
      </StyledIcon>
    </StyledHeader>
  );
}

const StyledHeader = styled("div")(({ theme }) => ({
  padding: "1%",
  marginLeft: "1.7%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    height: "3.2rem",
    margin: 0,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    zIndex: 1000,
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: "#000066",
  fontWeight: "bold",
  fontSize: "2rem",
  letterSpacing: 2,
  [theme.breakpoints.down("sm")]: {
    marginLeft: "2%",
    fontSize: "1.2rem",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "4vw",
  height: "4vw",
  [theme.breakpoints.down("sm")]: {
    width: "8vw",
    height: "8vw",
  },
}));

const StyledTwitter = styled(TwitterIcon)(({ theme }) => ({
  color: "#1da1f2",
  width: "4vw",
  height: "4vw",
  [theme.breakpoints.down("sm")]: {
    width: "8vw",
    height: "8vw",
  },
}));

const StyledIcon = styled("div")(({ theme }) => ({
  marginRight: "3%",
  gap: "2rem", // アイコンの間隔
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    marginRight: "1.7%",
    gap: "1rem",
  },
}));

export default Header;
