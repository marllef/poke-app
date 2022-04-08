import { PokeAPIPokemon } from "~/interfaces/PokeAPI/Pokemons";

export async function fetchPokemon(url: string) {
  const response = await fetch(url);

  const pokemon: PokeAPIPokemon = await response.json();

  return {
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites.other["official-artwork"].front_default,
    types: pokemon.types.map((type) => type.type.name),
  };
}
