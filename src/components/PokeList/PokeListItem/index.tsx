import { Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import { getTypeColor } from "~/utils/PokeTypesMap";
import {
  Container,
  PokemonID,
  PokemonName,
  PokemonSprite,
  SelectedIcon,
  TypeBar,
  TypeContainer,
} from "./styles";

import { FaCheck } from "react-icons/fa";
import { HTMLAttributes } from "react";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLElement> {
  pokemon: Pokemon;
  selected?: boolean;
}

export const PokeListItem = ({ pokemon, selected = false, ...rest }: Props) => {
  return (
    <Container {...rest}>
      {selected && (
        <SelectedIcon>
          <FaCheck />
        </SelectedIcon>
      )}
      <PokemonID>#{pokemon.id}</PokemonID>
      <PokemonSprite>
        <Image
          src={pokemon.image}
          alt="Image from Pokemon"
          width={720}
          loading="eager"
          height={720}
          priority={true}
        />
      </PokemonSprite>
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
