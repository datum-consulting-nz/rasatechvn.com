import React from "react";
// import FlexWrapperCenter from "./FlexWrapperCenter";
import { Box, Heading, theme } from "rasatech-design-system";
import StyledDivWithDimensions from "./StyledDivWithDimensions";
import FlexWrapperCenter from "./FlexWrapperCenter";
import styled from "styled-components";
import ButtonWithGatsbyLink from "./ButtonWithGatsbyLink"

const BoxWithTextShadow = styled(Box)`
  text-shadow: 0 0 5px ${theme.colors.black};
`;

const Header = ({ headerData }) => {
  const {
    headerTitle,
    headerSubTitle,
    headerBackgroundImage,
    headerCallToActionTitle,
    headerCallToActionLink,
    headerShowCallToActionButton
  } = headerData;
  return (
    <StyledDivWithDimensions
      smallScreenHeight={[60, 100]}
      mediumScreenHeight={[50, 80]}
      largeScreenHeight={[50, 70]}
      backgroundImageUrl={headerBackgroundImage.fluid.src}
    >
      <FlexWrapperCenter>
        <BoxWithTextShadow
          m={[2, 3, 4]}
          color={"white"}
          textAlign={"center"}
        >
          <Heading.h1
            fontSize={[5, 6, 7, 8]}
          >
            {headerTitle}
          </Heading.h1>

          <Heading.h3
            fontSize={[3, 4, 5]}
          >
            {headerSubTitle}
          </Heading.h3>

          <ButtonWithGatsbyLink
            size="large"
            fontSize={[4]}
          >
            {headerCallToActionTitle}
          </ButtonWithGatsbyLink>
        </BoxWithTextShadow>
      </FlexWrapperCenter>
    </StyledDivWithDimensions>
  );
};

export default Header;