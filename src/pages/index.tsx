import type { NextPage } from "next";
import Head from "next/head";
import { NavHeader } from "~/components/NavHeader";
import { PokeList } from "~/components/PokeList";
import { TeamArea } from "~/components/TeamArea";
import useData from "~/hooks/useData";

const Home: NextPage = () => {
  const { data } = useData();
  return (
    <div>
      <Head>
        <title>PokeAPP</title>
        <meta name="description" content="Crie seu time pokemon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavHeader />
        <TeamArea team={data} />
        <PokeList data={data} />
      </main>
    </div>
  );
};

export default Home;
