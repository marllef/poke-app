import { useEffect, useRef } from "react";
import useData from "~/hooks/useData";
import useSelectPokemon from "~/hooks/useSelectPokemon";
import { PokeListItem } from "./PokeListItem";
import { Container, List, ListBox, ListHeading } from "./styles";

export const PokeList = () => {
  const lastItemRef = useRef(null);
  const { data, next, loading } = useData();

  const { selectPokemon, selected } = useSelectPokemon();

  // Adiciona um observer ao final da lista para criar o scroll infinito
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      // Se o alvo estiver aparente, busca a proxima pagina de pokemons na API.
      if (target.isIntersecting) {
        next();
      }
    }, options);

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }
  }, [data]);

  return (
    <>
      <Container>
        <ListBox>
          <ListHeading>Escolha 6 Pokemons:</ListHeading>
          <List>
            {data
              .filter((pokemon) => pokemon.id < 10000) // Filtra os pokemons
              .map((pokemon) => (
                <PokeListItem
                  key={pokemon.name}
                  pokemon={pokemon}
                  selected={selected.includes(pokemon)}
                  onClick={() => selectPokemon(pokemon)}
                />
              ))}
            {loading && <div>Carregando...</div>}
            {!!data.length && <div ref={lastItemRef} />}
          </List>
        </ListBox>
      </Container>
    </>
  );
};
