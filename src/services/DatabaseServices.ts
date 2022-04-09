import { PokeTeam } from "~/interfaces/PokeAPI/Pokemons";
import { storage } from "~/utils/Storage";

export const DatabaseServices = {
  getTeams: () => {
    const teams = storage.getItem<PokeTeam[]>("PokeTeams");
    if (teams) {
      const parsedTeams = teams;
      return parsedTeams;
    }
    return null;
  },

  getTeamById: (id: string) => {
    const teams = storage.getItem<PokeTeam[]>("PokeTeams");
    if (teams?.length) {
      const team = teams.filter((team) => team.id === id)[0];
      return team;
    }

    return null;
  },

  clearTeams: () => {
    storage.removeItem<PokeTeam[]>("PokeTeams");
  },

  deleteTeamByID: (id: string) => {
    const teams = storage.getItem<PokeTeam[]>("PokeTeams");
    if (teams?.length) {
      const team = teams.filter((team) => team.id !== id);
      storage.setItem("PokeTeams", team);
      return team;
    }

    return null;
  },

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

      console.log(created);

      return created.filter((item) => item.name === rest.name)[0];
    }
  },
};
