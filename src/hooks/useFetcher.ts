import useSWR from "swr";
import { PokeAPIPokemon, PokeAPIResponse } from "~/interfaces/PokeAPI/Pokemons";

export default function useFetcher(url: string) {
  const { data, error, isValidating } = useSWR(url, async (url) => {
    const response = await fetch(url);

    const apiResponse: PokeAPIResponse = await response.json();

    const pokePromises = apiResponse.results.map(async (poke) => {
      const response = await fetch(poke.url);

      const pokemon: PokeAPIPokemon = await response.json();

      return {
        name: pokemon.name,
        id: pokemon.id,
        height: pokemon.height,
        image: pokemon.sprites.other["official-artwork"].front_default,
        types: pokemon.types.map((type) => type.type.name),
      };
    });

    const pokemons = await Promise.all(pokePromises);

    return pokemons;
  });
  
  return {
    data,
    isValidating,
    error,
  };
}
