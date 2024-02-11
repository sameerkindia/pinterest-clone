import styled from "styled-components";

export const TilesContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1rem;
  margin-top: 19rem;
`;

export const TileColumn = styled.div`
  transform: translateY(${(props) => props.margin || "0rem"});
  height: 30rem;
  width: 100%;
`;

export const TileImg = styled.img`
  height: 23rem;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;
