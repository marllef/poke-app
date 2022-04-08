import { SButton } from "./styles";
import { FaCheck } from "react-icons/fa";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const SaveButton = ({ disabled = true, ...rest }: Props) => {
  return (
    <SButton disabled={disabled} {...rest}>
      <FaCheck />
    </SButton>
  );
};
