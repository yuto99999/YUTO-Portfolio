import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";

type TProps = {
  text: string;
};

const ParentTextAnimationWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#F5F4EE",
  color: "#000066",
});

const TextAnimationWrapper = styled("div")(({ theme }) => ({
  fontSize: "6rem",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "4.2rem",
  },
}));

const Animation: React.FC<TProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(animationInterval);
      }
    }, 100); // 100ミリ秒ごとに文字を表示

    return () => clearInterval(animationInterval);
  }, [text, currentIndex]);

  return (
    <ParentTextAnimationWrapper>
      <TextAnimationWrapper>{displayedText}</TextAnimationWrapper>
    </ParentTextAnimationWrapper>
  );
};

export default Animation;
