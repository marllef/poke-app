import styled from "styled-components";

export const DelButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: none;
  margin: 5px;
  width: 40px;
  height: 40px;
  font-size: large;
  color: white;
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "#EEBFBC" : "#F8635A")};
  align-self: flex-end;
`;
