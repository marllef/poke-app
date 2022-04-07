import useSelectPokemon from "~/hooks/useSelectPokemon";
import { PokeAPIResults, Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import { PokeListItem } from "./PokeListItem";
import { Container, ItemList, List, ListBox, ListHeading } from "./styles";

interface Props {
  data: Pokemon[];
}

export const PokeList = ({ data }: Props) => {
  const { selectPokemon, selected } = useSelectPokemon();
  return (
    <>
      <Container>
        <ListBox>
          <ListHeading>Choose 6 Pokemons:</ListHeading>
          <List>
            {data.map((pokemon) => (
              <PokeListItem
                key={pokemon.id}
                pokemon={pokemon}
                selected={selected.includes(pokemon)}
                onClick={() => selectPokemon(pokemon)}
              />
            ))}
          </List>
        </ListBox>
      </Container>
    </>
  );
};
