/**
 * Define os serviços do banco de dados que serão utilizados pela aplicação.
 * 
 * Implementa metodos para facilitar o gerenciamento do banco de dados.
 */

import { PokeTeam } from "~/interfaces/PokeAPI/Pokemons";
import { storage } from "~/utils/Storage";

export const DatabaseServices = {
  // busca todas as equipes
  getTeams: () => {
    const teams = storage.getItem<PokeTeam[]>("PokeTeams");
    if (teams) {
      const parsedTeams = teams;
      return parsedTeams;
    }
    return null;
  },

  // busca a equipe pelo ID
  getTeamById: (id: string) => {
    const teams = storage.getItem<PokeTeam[]>("PokeTeams");

    if (teams?.length) {
      const team = teams.filter((team) => team.id === id)[0];
      return team;
    }

    return null;
  },

  // deleta todas as equipes
  clearTeams: () => {
    storage.removeItem<PokeTeam[]>("PokeTeams");
  },

  // deleta uma equipe com base no ID
  deleteTeamByID: (id: string) => {
    const teams = storage.getItem<PokeTeam[]>("PokeTeams");

    if (teams?.length) {
      const team = teams.filter((team) => team.id !== id);
      storage.setItem("PokeTeams", team);
      return team;
    }

    return null;
  },

  // adiciona uma equipe ao banco de dados
  addTeam: (team: PokeTeam) => {
    const { id, ...rest } = team;

    const prevTeams = storage.getItem<PokeTeam[]>("PokeTeams");

    if (prevTeams) {
      const created: PokeTeam[] = storage.setItem("PokeTeams", [
        ...prevTeams,
        {
          id: crypto.randomUUID(),
          ...rest,
        },
      ]);

      return created.filter((item) => item.name === rest.name)[0];
    }
  },
};
