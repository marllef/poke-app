import Image from "next/image";
import { useEffect, useState } from "react";
import { PokeAPIPokemon, Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import { getTypeColor } from "~/utils/PokeTypesMap";
import { Container, PokeDot, PokePart, PokeSprite } from "./styles";

interface Props {
  pokemon?: Pokemon;
  selected?: boolean;
}

export const PokeSlot = ({ pokemon, selected = true }: Props) => {
  useEffect(() => {
    console.log(pokemon);
  }, []);
  return (
    <Container>
      {pokemon && (
        <PokeSprite
          src={pokemon.image}
          height={pokemon.height}
          alt="Imagem Pokemon"
        />
      )}

      <PokeDot />
      <PokePart color={getTypeColor(pokemon?.types[0]!)} />
      <PokePart angle={180} />
    </Container>
  );
};
