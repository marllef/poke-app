import { PokeAPIResults, Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import { PokeListItem } from "./PokeListItem";
import { Container, ItemList, List, ListBox, ListHeading } from "./styles";

interface Props {
  data: Pokemon[];
}

export const PokeList = ({ data }: Props) => {
  return (
    <>
      <Container>
        <ListHeading>Choose 6 Pokemons:</ListHeading>
        <ListBox>
          <List>
            {data.map((pokemon) => (
              <PokeListItem key={pokemon.id} pokemon={pokemon}></PokeListItem>
            ))}
          </List>
        </ListBox>
      </Container>
    </>
  );
};
