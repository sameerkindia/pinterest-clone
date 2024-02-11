import { TILES_MARGINS } from "../../utils/text";
import { TileColumn, TileImg, TilesContainer } from "./Tiles.styled";

function randomNum() {
  return Math.floor(Math.random() * 1000);
}

function Tiles() {
  return (
    <TilesContainer>
      {TILES_MARGINS.map((margin, i) => {
        return (
          <TileColumn margin={margin} key={i}>
            <TileImg
              src={`https://picsum.photos/id/${randomNum()}/200/400`}
              alt="image"
            />
            <TileImg
              src={`https://picsum.photos/id/${randomNum()}/200/400`}
              alt="image"
            />
          </TileColumn>
        );
      })}
    </TilesContainer>
  );
}

export default Tiles;
