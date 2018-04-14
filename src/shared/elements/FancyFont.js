import styled from "styled-components";

const FancyFont = styled.span`
  font-family: Sacramento;
  color: ${props => props.theme.potmGreen};
  font-size: ${props => props.fontSize || "58px"};
`;

export default FancyFont;
