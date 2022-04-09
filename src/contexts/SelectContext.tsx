/**
 * - Implementa o provedor para o contexto de seleção.
 *
 * - Este contexto gerencia os estados relacionados à seleção de pokemons.
 */

import { createContext, ReactNode, useState } from "react";
import { Pokemon } from "~/interfaces/PokeAPI/Pokemons";

type ContextType = {
  pokeSelected: Pokemon[];
  selectPokemon: { (poke: Pokemon): void };
  selectedSlot?: Pokemon;
  selectSlot: { (slot?: Pokemon): void };
};

interface Props {
  children: ReactNode;
}

export const SelectContext = createContext<ContextType | null>(null);

export const SelectProvider = ({ children }: Props) => {
  // Lista de pokemons selecionados para o time.
  const [pokeSelected, setSelected] = useState<Pokemon[]>([]);

  // Slot pokemon selecionado na edição de times.
  const [selectedSlot, setSelectedSlot] = useState<Pokemon>();

  // Função responsável por atualizar o estado referente aos pokemons selecionados para a equipe.
  function selectPokemon(pokemon: Pokemon) {
    // Verifica o numero de pokemons selecionados e evita seleção repetida.
    if (pokeSelected.length < 6 && !pokeSelected.includes(pokemon)) {
      setSelected((value) => [...value, pokemon]);
    }

    // Ao 'selecionar' o mesmo pokemon pela segunda vez, remove o pokemon do time.
    if (pokeSelected.includes(pokemon)) {
      setSelected((previous) =>
        previous.filter((poke) => poke.id !== pokemon.id)
      );
      setSelectedSlot(undefined);
    }
  }

  // Apenas deixa explicito no codigo os valores passados no contexto.
  const values: ContextType = {
    pokeSelected: pokeSelected,
    selectPokemon,
    selectedSlot: selectedSlot,
    selectSlot: (slot) => setSelectedSlot(slot),
  };

  return (
    <SelectContext.Provider value={values}>{children}</SelectContext.Provider>
  );
};
