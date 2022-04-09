import { PrismaClient } from "@prisma/client";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { NavHeader } from "~/components/NavHeader";
import { TeamList } from "~/components/TeamList";
import { SelectProvider } from "~/contexts/SelectContext";
import { PokeTeam } from "~/interfaces/PokeAPI/Pokemons";
import { DatabaseServices } from "~/services/DatabaseServices";

const TeamsPage: NextPage = () => {
  const [teams, setTeams] = useState<PokeTeam[]>();

  useEffect(() => {
    const userTeams = DatabaseServices.getTeams();
    if (userTeams) {
      setTeams(userTeams);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>PokeAPP | Teams</title>
        <meta name="description" content="Crie seu time pokemon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          overflow: "hidden",
        }}
      >
        <NavHeader title="Create New Team" />
        <SelectProvider>
          <TeamList data={teams || []} />
        </SelectProvider>
      </main>
    </div>
  );
};

export default TeamsPage;
