import type { NextPage } from "next";
import Head from "next/head";
import { NavHeader } from "~/components/NavHeader";
import { PokeList } from "~/components/PokeList";
import { TeamArea } from "~/components/TeamArea";
import useSelectPokemon from "~/hooks/useSelectPokemon";

const Home: NextPage = () => {
  const { selected } = useSelectPokemon();
  return (
    <div>
      <Head>
        <title>PokeAPP | Create Team</title>
        <meta name="description" content="Crie seu time pokemon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          overflow: "hidden",
        }}
      >
        <NavHeader />

        <TeamArea
          pokeTeam={{
            name: "Nova Equipe",
            pokemons: selected,
          }}
          editable
          showActions
        />
        <PokeList />
      </main>
    </div>
  );
};

export default Home;
