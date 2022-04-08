export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export interface PokeTeam {
  id?: string;
  name: string;
  pokemons: Pokemon[];
}

export interface PokeAPIResults {
  name: string;
  url: string;
}

export interface PokeAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeAPIResults[];
}

export interface PokeAPISprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface PokeAPIType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokeAPIPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];
  forms: any[];
  game_indices: any[];
  held_items: any[];
  location_area_encounters: string;
  moves: any[];
  past_types: any[];
  sprites: PokeAPISprites;
  species: any;
  stats: any[];
  types: PokeAPIType[];
}
