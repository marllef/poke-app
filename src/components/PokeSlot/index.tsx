import Image from "next/image";
import { HTMLAttributes, useEffect, useState } from "react";
import useSelectPokemon from "~/hooks/useSelectPokemon";
import { Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import { getTypeColor } from "~/utils/PokeTypesMap";
import { Container, PokeDot, PokePart, PokeSprite } from "./styles";

interface Props extends HTMLAttributes<HTMLElement> {
  pokemon?: Pokemon;
  isSelectable?: boolean;
}

export const PokeSlot = ({ pokemon, isSelectable = false, ...rest }: Props) => {
  const { selectedSlot, selectSlot } = useSelectPokemon();
  const [isSelected, setIsSelected] = useState(selectedSlot === pokemon);

  useEffect(() => {
    setIsSelected(selectedSlot === pokemon);

    if (!selectedSlot) {
      setIsSelected(true);
    }
  }, [selectedSlot]);

  return (
    <Container
      grayscale={isSelected ? 0 : 90} // Destaca o pokemon do time selecionado na aba de criação
      onClick={() => isSelectable && selectSlot(pokemon)}
      {...rest}
    >
      {!!pokemon && <PokeSprite src={pokemon.image} alt="Pokemon Image" />}

      <PokeDot />
      <PokePart color={getTypeColor(pokemon?.types[0]!)} />
      <PokePart angle={180} />
    </Container>
  );
};
