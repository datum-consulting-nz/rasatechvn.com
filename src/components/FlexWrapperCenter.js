import styled from "styled-components";
import { Flex, theme } from "rasatech-design-system";

const FlexWrapperCenter = styled(Flex.withComponent("section")).attrs({
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  flexWrap: "wrap"
})`
  position: relative;
  z-index: 1;
  max-width: ${theme.breakpoints[3]};
  margin: auto auto;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export default FlexWrapperCenter;