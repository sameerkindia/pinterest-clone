import { Text } from "../../utils/Text.styled";
import { StyledFooter } from "./Footer.styled";
import { ImDownload3 } from "react-icons/im";

function Footer() {
  return (
    <StyledFooter>
      <Text color="#000">
        Download App <ImDownload3 />
      </Text>
    </StyledFooter>
  );
}

export default Footer;
