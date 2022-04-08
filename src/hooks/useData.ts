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
