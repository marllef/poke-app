import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import useData from "~/hooks/useData";
import useSelectPokemon from "~/hooks/useSelectPokemon";
import { PokeTeam } from "~/interfaces/PokeAPI/Pokemons";
import { DatabaseServices } from "~/services/DatabaseServices";
import { TeamArea } from "../TeamArea";
import {
  Container,
  Divider,
  List,
  ListBox,
  ListHeading,
  ListItem,
} from "./styles";

interface Props {
  data: PokeTeam[];
}

export const TeamList = ({ data: pokeTeams }: Props) => {
  const [data, setData] = useState<PokeTeam[]>([]);
  const router = useRouter();

  useEffect(() => {
    setData(pokeTeams);
  }, [pokeTeams]);

  // Deleta uma equipe pelo id
  function handleDelete(id: any) {
    DatabaseServices.deleteTeamByID(id);
    router.reload();
  }

  return (
    <>
      <Container>
        <ListBox>
          <List>
            {(data || []).map((team, index) => (
              <ListItem key={team.id}>
                <TeamArea
                  pokeTeam={team}
                  onDelete={() => handleDelete(team.id)}
                />
                {index < data?.length - 1 && <Divider />}
              </ListItem>
            ))}
          </List>
        </ListBox>
      </Container>
    </>
  );
};
