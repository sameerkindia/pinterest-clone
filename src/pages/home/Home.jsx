import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { StyledHome } from "./Home.styled";

function Home() {
  return (
    <StyledHome>
      <div>
        <Header />
        <Body />
      </div>
      <Footer />
    </StyledHome>
  );
}

export default Home;
