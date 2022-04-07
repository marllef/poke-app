import Image from "next/image";
import { useEffect, useState } from "react";
import { PokeAPIPokemon, Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import { getTypeColor } from "~/utils/PokeTypesMap";
import { Container, PokeDot, PokePart, PokeSprite } from "./styles";

interface Props {
  pokemon?: Pokemon;
  selected?: boolean;
}

export const PokeSlot = ({ pokemon, selected = false }: Props) => {
  useEffect(() => {
    console.log(pokemon);
  }, []);
  return (
    <Container>
      <PokeSprite src={pokemon?.image} height={pokemon?.height} />
      <PokeDot />
      <PokePart color={getTypeColor(pokemon?.types[0]!)} />
      <PokePart angle={180} />
    </Container>
  );
};
