import { useEffect, useState } from "react";
import { Text } from "../../utils/Text.styled";
import { HEADINGS } from "../../utils/text";
import {
  AnimatedHeading,
  Dot,
  DotsContainer,
  HeadingContainer,
  StyledAnimationIcon,
  StyledBody,
} from "./Body.styled";
import Tiles from "../tiles/Tiles";
import { AnimatePresence } from "framer-motion";

function Body(props) {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const timeOut = setInterval(() => {
      setCurrentHeadingIndex((currentIndex) =>
        currentIndex + 1 < 4 ? currentIndex + 1 : 0
      );
    }, 4000);

    return () => {
      clearInterval(timeOut);
    };
  }, [currentHeadingIndex]);

  return (
    <StyledBody>
      <HeadingContainer>
        <Text size="xLarge">Get your next</Text>
        <AnimatePresence>
          {HEADINGS.map((heading, index) => {
            return (
              index === currentHeadingIndex && (
                <AnimatedHeading
                  initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{
                    y: "-50%",
                    opacity: 0,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  key={index}
                >
                  <Text size="xLarge" color={heading.color}>
                    {heading.name}
                  </Text>
                </AnimatedHeading>
              )
            );
          })}
        </AnimatePresence>

        <DotsContainer>
          {HEADINGS.map((info, i) => {
            return (
              <Dot
                color={
                  HEADINGS[currentHeadingIndex].name === info.name
                    ? info.color
                    : null
                }
                onClick={() => setCurrentHeadingIndex(i)}
                key={info.name}
              />
            );
          })}
        </DotsContainer>
      </HeadingContainer>

      <Tiles currentIndex={currentHeadingIndex} />

      <StyledAnimationIcon
        onClick={props.toggleTheme}
        bgColor={HEADINGS[currentHeadingIndex].color}
        size={50}
      />
    </StyledBody>
  );
}

export default Body;
