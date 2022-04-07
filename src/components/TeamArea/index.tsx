import { Container, PokeRow, TeamBox, TeamHeader } from "./styles";
import { PokeSlot } from "~/components/PokeSlot";
import { useEffect } from "react";
import { PokeAPIResults } from "~/interfaces/PokeAPI/Pokemons";

interface Props {
  team?: PokeAPIResults[];
}

export const TeamArea = ({ team = [] }: Props) => {
  return (
    <Container>
      <TeamBox>
        <TeamHeader>My Team</TeamHeader>

        <PokeRow line={0}>
          <PokeSlot pokeUrl={team[0]?.url} />
          <PokeSlot pokeUrl={team[1]?.url} />
          <PokeSlot pokeUrl={team[2]?.url} />
        </PokeRow>

        <PokeRow line={1}>
          <PokeSlot pokeUrl={team[3]?.url} />
          <PokeSlot pokeUrl={team[4]?.url} />
          <PokeSlot pokeUrl={team[5]?.url} />
        </PokeRow>
      </TeamBox>
    </Container>
  );
};
