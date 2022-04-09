import { useContext } from "react";
import { SelectContext } from "~/contexts/SelectContext";

const useSelectPokemon = () => {
  const { pokeSelected: selected, selectPokemon, ...rest } = useContext(SelectContext)!;

  return {
    selected,
    selectPokemon,
    ...rest,
  };
};

export default useSelectPokemon;
