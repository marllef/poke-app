import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  max-width: 450px;
  list-style: none;
`;

export const ItemList = styled.li`
  padding: 1px 2px;
`;

export const ListHeading = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: larger;
`;

export const ListBox = styled.div`
  display: flex;
  min-width: 375px;
  max-width: 500px;
  flex-direction: column;
`;
