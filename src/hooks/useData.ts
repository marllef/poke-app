import { useContext } from "react";
import { PokeDataContext } from "~/contexts/DataContext";

const useData = () => {
  const { data, observerRef, ...rest } = useContext(PokeDataContext)!;

  return {
    data,
    observerRef,
    ...rest,
  };
};

export default useData;
