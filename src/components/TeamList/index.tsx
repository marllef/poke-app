import { useCallback, useEffect, useRef, useState } from "react";
import useData from "~/hooks/useData";
import useSelectPokemon from "~/hooks/useSelectPokemon";
import { PokeTeam } from "~/interfaces/PokeAPI/Pokemons";
import { TeamArea } from "../TeamArea";
import { Container, List, ListBox, ListHeading } from "./styles";

interface Props {
  data: PokeTeam[];
}

export const TeamList = ({ data: pokeTeams }: Props) => {
  const [data, setData] = useState<PokeTeam[]>([]);

  useEffect(() => {
    setData(pokeTeams);
  }, [pokeTeams]);

  return (
    <>
      <Container>
        <ListBox>
          <List>
            {(data || []).map((team) => (
              <TeamArea key={team.id} pokeTeam={team} />
            ))}
          </List>
        </ListBox>
      </Container>
    </>
  );
};
