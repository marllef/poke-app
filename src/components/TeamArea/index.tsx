import { Container, PokeRow, TeamBox, TeamHeader } from "./styles";
import { PokeSlot } from "~/components/PokeSlot";
import { useEffect } from "react";
import { PokeAPIResults, Pokemon } from "~/interfaces/PokeAPI/Pokemons";

interface Props {
  team?: Pokemon[];
}

export const TeamArea = ({ team = [] }: Props) => {
  return (
    <Container>
      <TeamBox>
        <TeamHeader>My Team</TeamHeader>

        <PokeRow line={0}>
          <PokeSlot pokemon={team[0]} />
          <PokeSlot pokemon={team[1]} />
          <PokeSlot pokemon={team[2]} />
        </PokeRow>

        <PokeRow line={1}>
          <PokeSlot pokemon={team[3]} />
          <PokeSlot pokemon={team[4]} />
          <PokeSlot pokemon={team[5]} />
        </PokeRow>
      </TeamBox>
    </Container>
  );
};
