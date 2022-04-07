import { useContext } from "react";
import { SelectContext } from "~/contexts/SelectContext";

const useSelectPokemon = () => {
  const { selected, selectPokemon } = useContext(SelectContext)!;

  return {
    selected,
    selectPokemon,
  };
};

export default useSelectPokemon;
