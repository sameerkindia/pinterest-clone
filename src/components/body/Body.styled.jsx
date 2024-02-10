import styled, { keyframes } from "styled-components";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";

export const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const bounce = keyframes`
  0%{
    transform: translate(-50% , 0);
  }
  50%{
    transform: translate(-50%, -2rem);
  }
  100%{
    transform: translate(-50%, 0);
  }
`;

export const StyledAnimationIcon = styled(HiOutlineLightBulb)`
  background-color: ${(props) => props.bgColor || "black"};
  color: "#fff";
  border-radius: 100rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 2s ease-in-out infinite;

  &:hover {
    cursor: pointer;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
`;

export const DotsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.8rem;
  margin-top: 6.2rem;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.color || "#e1e1e1"};
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 100rem;

  &:hover {
    cursor: pointer;
  }
`;

export const AnimatedHeading = styled(motion.div)`
  position: absolute;
  top: 44%;
`;
