import { DelButton } from "./styles";
import { FaTrash } from "react-icons/fa";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const DeleteButton = ({disabled = true, ...rest}: Props) => {
  return (
    <DelButton disabled={disabled} {...rest}>
      <FaTrash />
    </DelButton>
  );
};
