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

export const HeaderGroup = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  align-items: center;
`;

export const TeamBox = styled.div`
  display: flex;
  flex: 1;
  width: 375px;
  justify-content: baseline;
  flex-direction: column;
  
`;

export const PokeRow = styled.div<{ align?: string }>`
  display: flex;
  width: 100%;
  justify-content: ${({ align = "left" }: any) =>
    align === "left" ? "flex-start" : "flex-end"};
`;
