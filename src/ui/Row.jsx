import { css, styled } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(proprs) =>
    proprs.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(proprs) =>
    proprs.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
