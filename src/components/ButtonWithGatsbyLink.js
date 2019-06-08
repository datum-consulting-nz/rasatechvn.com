import { Link } from "gatsby";
import { Button, theme } from "rasatech-design-system";
import styled from "styled-components";

const ButtonWithGatsbyLink = styled(Button.withComponent(Link))`
  display: inline-block;
  text-align: center;
  justify-content: center;
  padding: 20px 30px;
  margin: 10px auto;
  font-size: ${theme.fontSizes[4]};
  border-radius: 999px;
`;

ButtonWithGatsbyLink.defaultProps = {
  color: "white",
  hoverColor: "white",
  bg: "darkAccent",
  hoverBg: "accent",
  boxShadow: "yes"
};

export default ButtonWithGatsbyLink;