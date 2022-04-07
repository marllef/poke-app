import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.75rem;
  background-color: #e9eaec;
`;

export const TeamHeader = styled.h1`
  width: 100%;
  font-size: 13px;
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
