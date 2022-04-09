import { Container, PokeRow, TeamBox, TeamHeader } from "./styles";
import { PokeSlot } from "~/components/PokeSlot";

import { DeleteButton } from "../Button/Delete";
import { SaveButton } from "../Button/Save";

import { useEffect, useState } from "react";
import { DatabaseServices as database } from "~/services/DatabaseServices";
import { Pokemon, PokeTeam } from "~/interfaces/PokeAPI/Pokemons";
import { useRouter } from "next/router";
import useSelectPokemon from "~/hooks/useSelectPokemon";

interface Props {
  pokeTeam: PokeTeam;
  editable?: boolean;
  showActions?: boolean;
}

export const TeamArea = ({
  pokeTeam,
  showActions = false,
  editable = false,
}: Props) => {
  const [team, setTeam] = useState<PokeTeam>();
  const [title, setTitle] = useState(pokeTeam.name);
  const router = useRouter();
  const { selectedSlot, selectSlot, selectPokemon, selected } =
    useSelectPokemon();

  useEffect(() => {
    setTeam(pokeTeam);
  }, [pokeTeam]);

  function handleSave() {
    if (team) {
      const createdTeam = database.addTeam({
        name: title,
        pokemons: team.pokemons,
      });

      if (createdTeam) {
        console.log(`${createdTeam.name} foi criado!`);
        selected.splice(0, 6);
        router.push("/teams");
      }
    }
  }

  function handleDelete() {
    selected
      .filter((item) => item.id === selectedSlot?.id)
      .map((poke) => selectPokemon(poke));

    selectSlot();
  }

  function editTitle(value: string) {
    setTitle(value);
  }

  return (
    <Container>
      <TeamBox>
        <TeamHeader
          contentEditable={editable}
          suppressContentEditableWarning
          onInput={({ currentTarget }) => editTitle(currentTarget.textContent!)}
        >
          {team?.name}
        </TeamHeader>

        <PokeRow align={"left"}>
          <PokeSlot pokemon={team?.pokemons[0]} isSelectable={editable} />
          <PokeSlot pokemon={team?.pokemons[1]} isSelectable={editable} />
          <PokeSlot pokemon={team?.pokemons[2]} isSelectable={editable} />
        </PokeRow>

        <PokeRow align={"right"}>
          <PokeSlot pokemon={team?.pokemons[3]} isSelectable={editable} />
          <PokeSlot pokemon={team?.pokemons[4]} isSelectable={editable} />
          <PokeSlot pokemon={team?.pokemons[5]} isSelectable={editable} />
        </PokeRow>

        {showActions && (
          <PokeRow align={"rigth"}>
            <SaveButton
              disabled={!(team?.pokemons.length === 6)}
              onClick={handleSave}
            />
            <DeleteButton disabled={!!!selectedSlot} onClick={handleDelete} />
          </PokeRow>
        )}
      </TeamBox>
    </Container>
  );
};
