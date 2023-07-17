import { styled } from "styled-components";
import css from "styled-components";
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 20px;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 10px;
      font-weight: 600;
    `}
`;

export default Heading;
