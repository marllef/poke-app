import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import useData from "~/hooks/useData";
import useSelectPokemon from "~/hooks/useSelectPokemon";
import { PokeTeam } from "~/interfaces/PokeAPI/Pokemons";
import { DatabaseServices } from "~/services/DatabaseServices";
import { TeamArea } from "../TeamArea";
import { Container, List, ListBox, ListHeading } from "./styles";

interface Props {
  data: PokeTeam[];
}

export const TeamList = ({ data: pokeTeams }: Props) => {
  const [data, setData] = useState<PokeTeam[]>([]);
  const router = useRouter();

  useEffect(() => {
    setData(pokeTeams);
  }, [pokeTeams]);

  function handleDelete(id: any) {
    DatabaseServices.deleteTeamByID(id);
    router.reload();
  }

  return (
    <>
      <Container>
        <ListBox>
          <List>
            {(data || []).map((team) => (
              <TeamArea
                key={team.id}
                pokeTeam={team}
                onDelete={() => handleDelete(team.id)}
              />
            ))}
          </List>
        </ListBox>
      </Container>
    </>
  );
};
