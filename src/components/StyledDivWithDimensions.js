import styled, { css } from "styled-components";
import { theme } from "rasatech-design-system";
import PropTypes from "prop-types";

const StyledDivWithDimensions = styled.div`
  ${props =>
  props.backgroundImageUrl
    ? css`
          background-image: url(${props => props.backgroundImageUrl});
          background-repeat: no-repeat;
          background-position: ${props => props.backgroundPosition};
          background-size: ${props => props.backgroundSize};
        `
    : null};
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  ${props =>
  props.minHeight
    ? css`
          min-height: ${props => props.smallScreenHeight[0]}vh;
          @media (orientation: landscape) {
            min-height: ${props =>
      props.smallScreenHeight[1] === undefined
        ? props.smallScreenHeight[0]
        : props.smallScreenHeight[1]}vh;
          }
          ${theme.mediaQueries.md} {
            min-height: ${props => props.mediumScreenHeight[0]}vh;
            @media (orientation: landscape) {
              min-height: ${props =>
      props.mediumScreenHeight[1] === undefined
        ? props.mediumScreenHeight[0]
        : props.mediumScreenHeight[1]}vh;
            }
          }
          ${theme.mediaQueries.lg} {
            min-height: ${props => props.largeScreenHeight[0]}vh;
            @media (orientation: landscape) {
              min-height: ${props =>
      props.largeScreenHeight[1] === undefined
        ? props.largeScreenHeight[0]
        : props.largeScreenHeight[1]}vh;
            }
          }
        `
    : css`
          height: ${props => props.smallScreenHeight[0]}vh;
          @media (orientation: landscape) {
            height: ${props =>
      props.smallScreenHeight[1] === undefined
        ? props.smallScreenHeight[0]
        : props.smallScreenHeight[1]}vh;
          }
          ${theme.mediaQueries.md} {
            height: ${props => props.mediumScreenHeight[0]}vh;
            @media (orientation: landscape) {
              height: ${props =>
      props.mediumScreenHeight[1] === undefined
        ? props.mediumScreenHeight[0]
        : props.mediumScreenHeight[1]}vh;
            }
          }
          ${theme.mediaQueries.lg} {
            height: ${props => props.largeScreenHeight[0]}vh;
            @media (orientation: landscape) {
              height: ${props =>
      props.largeScreenHeight[1] === undefined
        ? props.largeScreenHeight[0]
        : props.largeScreenHeight[1]}vh;
            }
          }
        `}
`;

StyledDivWithDimensions.defaultProps = {
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

StyledDivWithDimensions.propTypes = {
  smallScreenHeight: PropTypes.arrayOf(PropTypes.number).isRequired,
  mediumScreenHeight: PropTypes.arrayOf(PropTypes.number).isRequired,
  largeScreenHeight: PropTypes.arrayOf(PropTypes.number).isRequired,
  minHeight: PropTypes.bool,
  backgroundImageUrl: PropTypes.string,
  backgroundSize: PropTypes.oneOf([
    undefined,
    "auto",
    "length",
    "cover",
    "contain",
    "inherit",
  ]),
  backgroundPosition: PropTypes.oneOf([
    undefined,
    "left top",
    "left center",
    "left bottom",
    "right top",
    "right center",
    "right bottom",
    "center top",
    "center center",
    "center bottom",
  ]),
};

export default StyledDivWithDimensions;