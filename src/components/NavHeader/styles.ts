import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
  padding-bottom: 1rem;
  min-width: 375px;
  height: 110px;
  background-color: #90adc6;
`;

export const Separator = styled.div`
  background-color: white;
  width: 100%;
  height: 1px;
`;
export const Text = styled.a`
  cursor: pointer;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding-top: 0.7rem;
  font-size: 18px;
  color: white;
  font-weight: 800;
`;
