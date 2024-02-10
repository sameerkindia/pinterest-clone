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
          <div key={i}>
            <TileColumn margin={margin}>
              <TileImg
                src={`https://picsum.photos/id/${randomNum()}/200/300`}
                alt="image"
              />
              <TileImg
                src={`https://picsum.photos/id/${randomNum()}/200/300`}
                alt="image"
              />
            </TileColumn>
          </div>
        );
      })}
    </TilesContainer>
  );
}

export default Tiles;
