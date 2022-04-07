import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.75rem;
  background-color: #e9eaec;
`;

export const TeamHeader = styled.div`
  padding: 0.75rem 0.25rem;
  font-weight: 600;
  font-size: larger;
`;

export const TeamBox = styled.div`
  display: flex;
  flex: 1;
  width: 375px;
  justify-content: baseline;
  flex-direction: column;
`;

export const PokeRow = styled.div<{ line?: number }>`
  display: flex;
  width: 100%;
  justify-content: ${({ line = 0 }: any) =>
    line === 0 ? "flex-start" : "flex-end"};
`;
