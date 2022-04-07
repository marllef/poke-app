import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0 5px;
`;

export const PokeDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background-color: #e9eaec;
  border-radius: 100%;
  z-index: 998;
`;

export const PokeSprite = styled.img`
  position: absolute;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110px;
  height: 110px;
  border-radius: 100%;
  z-index: 999;
`;

export const PokePart = styled.div<{ angle?: number; color?: string }>`
  display: flex;
  border-radius: 999px 999px 0 0;
  margin: 5px;
  width: 90px;
  height: 45px;
  transform: ${({ angle = 0 }: any) => `rotate(${angle}deg)`};
  background-color: ${({ color = "white" }) => color};
`;
