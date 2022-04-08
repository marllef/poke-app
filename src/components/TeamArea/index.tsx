import { Container, PokeRow, TeamBox, TeamHeader } from "./styles";
import { PokeSlot } from "~/components/PokeSlot";

import { DeleteButton } from "../Button/Delete";
import { SaveButton } from "../Button/Save";

import { useEffect, useState } from "react";
import { DatabaseServices as database } from "~/services/DatabaseServices";
import { PokeTeam } from "~/interfaces/PokeAPI/Pokemons";
import { useRouter } from "next/router";

interface Props {
  pokeTeam: PokeTeam;
  showActions?: boolean;
}

export const TeamArea = ({ pokeTeam, showActions = false }: Props) => {
  const [team, setTeam] = useState<PokeTeam>();
  const router = useRouter();

  useEffect(() => {
    setTeam(pokeTeam);
  }, [pokeTeam]);

  async function handleSave() {
    if (team) {
      const createdTeam = database.addTeam({
        name: `Team-${Math.round(Math.random() * 100)}`,
        pokemons: team.pokemons,
      });

      if (createdTeam) {
        console.log(`${createdTeam.name} foi criado!`);
        router.push("/teams");
      }
    }
  }

  return (
    <Container>
      <TeamBox>
        <TeamHeader>{team?.name}</TeamHeader>

        <PokeRow align={"left"}>
          <PokeSlot pokemon={team?.pokemons[0]} />
          <PokeSlot pokemon={team?.pokemons[1]} />
          <PokeSlot pokemon={team?.pokemons[2]} />
        </PokeRow>

        <PokeRow align={"right"}>
          <PokeSlot pokemon={team?.pokemons[3]} />
          <PokeSlot pokemon={team?.pokemons[4]} />
          <PokeSlot pokemon={team?.pokemons[5]} />
        </PokeRow>

        {showActions && (
          <PokeRow align={"rigth"}>
            <SaveButton
              disabled={!(team?.pokemons.length === 6)}
              onClick={handleSave}
            />
            <DeleteButton />
          </PokeRow>
        )}
      </TeamBox>
    </Container>
  );
};
