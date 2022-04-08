import type { NextPage } from "next";
import Head from "next/head";
import { NavHeader } from "~/components/NavHeader";
import { PokeList } from "~/components/PokeList";
import { TeamArea } from "~/components/TeamArea";
import { SelectProvider } from "~/contexts/SelectContext";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PokeAPP | Teams</title>
        <meta name="description" content="Crie seu time pokemon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavHeader title="Create New Team" />
        <SelectProvider>
          <TeamArea />
        </SelectProvider>
      </main>
    </div>
  );
};

export default Home;
