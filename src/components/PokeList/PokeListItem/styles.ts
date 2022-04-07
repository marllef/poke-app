import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 25%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const PokemonID = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  padding: 4px 8px;
  font-size: smaller;
  color: white;
  font-weight: 400;
  border-radius: 100%;
  background-color: #90adc6;
`;

export const PokemonName = styled.span``;

export const PokemonSprite = styled.img`
  width: 70px;
  z-index: 99;
`;

export const TypeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TypeBar = styled.div<{ color?: string }>`
  width: 100%;
  max-width: 30px;
  height: 2px;
  margin: 0px 2px;
  background-color: ${({ color = "transparent" }) => color};
`;
