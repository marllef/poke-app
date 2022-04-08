import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useFetcher from "~/hooks/useFetcher";
import {
  PokeAPIPokemon,
  PokeAPIResponse,
  Pokemon,
} from "~/interfaces/PokeAPI/Pokemons";

type ContextType = {
  data: Pokemon[];
  next: { (): void };
};

interface Props {
  children: ReactNode;
}

export const PokeDataContext = createContext<ContextType | null>(null);

export const PokemonProvider = ({ children }: Props) => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [pageCount, setPageCount] = useState(0);

  const [fetchURL, setFetchURL] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=60"
  );

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((ApiRes: PokeAPIResponse) => {
        const pokemons = Promise.all(
          ApiRes.results.map((poke) => fetchPokemon(poke.url))
        );
        console.log("Buscando dados... ");

        if (!data.length) {
          pokemons.then((data) => setData(data));
        } else {
          pokemons.then((newData) =>
            setData((prevData) => [...prevData, ...newData])
          );
        }
        setNextPage(ApiRes.next);
      });
  }, [fetchURL, setNextPage]);

  async function fetchPokemon(url: string) {
    const response = await fetch(url);

    const pokemon: PokeAPIPokemon = await response.json();

    return {
      name: pokemon.name,
      id: pokemon.id,
      height: pokemon.height,
      image: pokemon.sprites.other["official-artwork"].front_default,
      types: pokemon.types.map((type) => type.type.name),
    };
  }

  const pager = () => {
    console.log("PageCount: ", pageCount);
    setPageCount((old) => old + 1);
    console.log("NextFunc:", nextPage);
    setFetchURL(nextPage!);
  };

  const values: ContextType = {
    data,
    next: pager,
  };
  return (
    <PokeDataContext.Provider value={values}>
      {children}
    </PokeDataContext.Provider>
  );
};
