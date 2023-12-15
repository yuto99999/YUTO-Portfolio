"use client";
import { useEffect, useState } from "react";
import { keyframes, styled } from "@mui/material";
import Animation from "./componets/molecule/Animation";
import Border from "./componets/atmos/Border";

export default function Home() {
  const [showText, setShowText] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
      setPageLoaded(true);
    }, 3500); //表示する時間の設定

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

  const WelcomeContainer = styled("div")({
    animation: `${fadeIn} 2s ease`, //フェードインの時間
  });

  return (
    <>
      {showText && <Animation text="Enjoy The Challenge !" />}
      {!showText && pageLoaded && (
        <>
          <WelcomeContainer>
            <Border />
          </WelcomeContainer>
        </>
      )}
    </>
  );
}
