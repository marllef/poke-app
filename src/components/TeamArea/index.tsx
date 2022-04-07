import { Container, PokeRow, TeamBox, TeamHeader } from "./styles";
import { PokeSlot } from "~/components/PokeSlot";
import { useEffect } from "react";
import { PokeAPIResults, Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import useSelectPokemon from "~/hooks/useSelectPokemon";

interface Props {
  team?: Pokemon[];
}

export const TeamArea = ({ team = [] }: Props) => {
  const { selected } = useSelectPokemon();
  return (
    <Container>
      <TeamBox>
        <TeamHeader>My Team</TeamHeader>

        <PokeRow line={0}>
          <PokeSlot pokemon={selected[0]} />
          <PokeSlot pokemon={selected[1]} />
          <PokeSlot pokemon={selected[2]} />
        </PokeRow>

        <PokeRow line={1}>
          <PokeSlot pokemon={selected[3]} />
          <PokeSlot pokemon={selected[4]} />
          <PokeSlot pokemon={selected[5]} />
        </PokeRow>
      </TeamBox>
    </Container>
  );
};
