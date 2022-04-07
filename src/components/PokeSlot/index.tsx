import Image from "next/image";
import { useEffect, useState } from "react";
import { PokeAPIPokemon, Pokemon } from "~/interfaces/PokeAPI/Pokemons";
import { Container, PokeDot, PokePart, PokeSprite } from "./styles";

interface Props {
  typeColor?: string;
  pokeUrl?: string;
}

export const PokeSlot = ({ typeColor = "white", pokeUrl: url }: Props) => {
  const [pokeInfo, setPokeInfo] = useState<Pokemon>();

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data: PokeAPIPokemon) =>
          setPokeInfo({
            name: data.name,
            id: data.id,
            image: data.sprites.front_default,
            type: data.types.map((type) => type.type),
          })
        );
    }
  }, [url]);

  useEffect(() => {
    console.log(pokeInfo);
  }, [pokeInfo]);

  return (
    <Container>
      <PokeDot />
      <PokeSprite src={pokeInfo?.image} />

      <PokePart color={typeColor} />
      <PokePart angle={180} />
    </Container>
  );
};
