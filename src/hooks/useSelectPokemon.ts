/**
 * Implementa um custom Hook para facilitar a utilização do contexto
 * que gerencia os estados de seleção dos pokemons.
 */

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
