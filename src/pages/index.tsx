import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { NavHeader } from "~/components/NavHeader";
import { PokeList } from "~/components/PokeList";
import { TeamArea } from "~/components/TeamArea";
import { SelectProvider } from "~/contexts/SelectContext";
import useData from "~/hooks/useData";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PokeAPP</title>
        <meta name="description" content="Crie seu time pokemon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavHeader />
        <SelectProvider>
          <TeamArea team={[]} />
          <PokeList />
        </SelectProvider>
      </main>
    </div>
  );
};

export default Home;