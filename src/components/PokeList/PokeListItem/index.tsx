import { Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import { getTypeColor } from "~/utils/PokeTypesMap";
import {
  Container,
  PokemonID,
  PokemonName,
  PokemonSprite,
  TypeBar,
  TypeContainer,
} from "./styles";

interface Props {
  pokemon: Pokemon;
}

export const PokeListItem = ({ pokemon }: Props) => {
  return (
    <Container>
      <PokemonID>#{pokemon.id}</PokemonID>
      <PokemonSprite src={pokemon.image} />
      <PokemonName>{pokemon.name}</PokemonName>
      <TypeContainer>
        {pokemon.types.map((type, index) => (
          <TypeBar key={index} color={getTypeColor(type)} />
        ))}
        {pokemon.types.length < 2 && <TypeBar />}
      </TypeContainer>
    </Container>
  );
};
