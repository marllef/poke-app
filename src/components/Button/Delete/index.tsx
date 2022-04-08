import { DelButton } from "./styles";
import { FaTrash } from "react-icons/fa";

export const DeleteButton = () => {
  return (
    <DelButton disabled>
      <FaTrash />
    </DelButton>
  );
};
