import { useContext } from "react";
import { PokeDataContext } from "~/contexts/DataContext";

const useData = () => {
  const { data } = useContext(PokeDataContext)!;
  
  return {
    data,
  };
};

export default useData;
