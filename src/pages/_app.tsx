import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PokemonProvider } from "~/contexts/DataContext";
import { SelectProvider } from "~/contexts/SelectContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider>
      <SelectProvider>
        <Component {...pageProps} />
      </SelectProvider>
    </PokemonProvider>
  );
}

export default MyApp;
