import { useEffect, useRef, useState } from "react";
import useData from "~/hooks/useData";
import useSelectPokemon from "~/hooks/useSelectPokemon";
import { PokeAPIResults, Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import { PokeListItem } from "./PokeListItem";
import { Container, ItemList, List, ListBox, ListHeading } from "./styles";

export const PokeList = () => {
  const { data, next } = useData();
  const lastItemRef = useRef(null);

  const { selectPokemon, selected } = useSelectPokemon();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entities) => {
        const target = entities[0];

        if (target.isIntersecting) {
          next();
        }
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 0,
      }
    );

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }
  }, [data]);

  return (
    <>
      <Container>
        <ListBox>
          <ListHeading>Choose 6 Pokemons:</ListHeading>
          <List>
            {data.map((pokemon) => (
              <PokeListItem
                key={pokemon.name}
                pokemon={pokemon}
                selected={selected.includes(pokemon)}
                onClick={() => selectPokemon(pokemon)}
              />
            ))}
            {data.length && (
              <div
                style={{ backgroundColor: "red", width: "100%", height: "2px" }}
                ref={lastItemRef}
              />
            )}
          </List>
        </ListBox>
      </Container>
    </>
  );
};
