import { Container, HeaderGroup, PokeRow, TeamBox, TeamHeader } from "./styles";
import { PokeSlot } from "~/components/PokeSlot";

import { DeleteButton } from "../Button/Delete";
import { SaveButton } from "../Button/Save";
import { FaPen } from "react-icons/fa";

import { useEffect, useState } from "react";
import { DatabaseServices as database } from "~/services/DatabaseServices";
import { PokeTeam } from "~/interfaces/PokeAPI/Pokemons";
import { useRouter } from "next/router";
import useSelectPokemon from "~/hooks/useSelectPokemon";

interface Props {
  pokeTeam: PokeTeam;
  editable?: boolean;
  showActions?: boolean;
  onDelete?: { (): void };
}

export const TeamArea = ({
  pokeTeam,
  showActions = false,
  editable = false,
  onDelete = () => {},
}: Props) => {
  const [team, setTeam] = useState<PokeTeam>();
  const [actionsVisible, setActionsVisible] = useState(showActions);
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
    onDelete();
  }

  function editTitle(value: string) {
    setTitle(value);
  }

  return (
    <Container
      onClick={() => !editable && setActionsVisible((value) => !value)}
    >
      <TeamBox>
        <HeaderGroup>
          <TeamHeader
            contentEditable={editable}
            suppressContentEditableWarning
            onInput={({ currentTarget }) =>
              editTitle(currentTarget.textContent!)
            }
          >
            {team?.name}
          </TeamHeader>
          {editable && <FaPen size={12} />}
        </HeaderGroup>

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

        {actionsVisible && (
          <PokeRow align={"rigth"}>
            <SaveButton
              disabled={!(team?.pokemons.length === 6) || !editable}
              onClick={handleSave}
            />
            <DeleteButton
              disabled={!!!selectedSlot && router.asPath === "/"}
              onClick={handleDelete}
            />
          </PokeRow>
        )}
      </TeamBox>
    </Container>
  );
};
