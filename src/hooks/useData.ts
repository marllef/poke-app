/**
 * Implementa um custom Hook para facilitar a utilização do contexto.
 */

import { useContext } from "react";
import { PokeDataContext } from "~/contexts/DataContext";

const useData = () => {
  const { data, ...rest } = useContext(PokeDataContext)!;

  return {
    data,
    ...rest,
  };
};

export default useData;
