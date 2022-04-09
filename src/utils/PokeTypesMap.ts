// constante de tipos e suas cores
const colors = {
  bug: "#89960B",
  dark: "#322C26",
  dragon: "#6B57D2",
  fairy: "#DA93DD",
  fighting: "#80311D",
  fire: "#EC5D35",
  ghost: "#AD6EEC",
  grass: "#68BB2B",
  ground: "#D0B155",
  normal: "#C3C0B8",
  poison: "#924694",
  psychic: "#DA3063",
  steel: "#8F8E9E",
  water: "#5CC1ED",
  electric: "#F4CB38",
  ice: "#9BDEFB",
  flying: "#5D74D5",
  rock: "#9D853C",
};

type color = typeof colors;

// Função auxiliar para relacionar as cores aos tipos de pokemon
export const getTypeColor = (type: string) => {
  return colors[type as keyof color];
};
