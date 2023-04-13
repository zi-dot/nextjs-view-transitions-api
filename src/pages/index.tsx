import Head from "next/head";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { listFavoritePokemons } from "@/lib/pokemon";
import { InferGetStaticPropsType, NextPage } from "next";

import styles from "./index.module.css";
import { PokemonTile } from "@/components/pokemon/Tile";
import { TransitionLink } from "@/components/shared/TransitionLink";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const pokemons = await listFavoritePokemons();

  return {
    props: {
      pokemons,
    },
  };
};

export const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Head>
        <title>好きなポケモンたち</title>
        <meta
          name="description"
          content="View transitions example with pokeAPI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={clsx(inter.className, styles.main)}>
        <ul role="list" className={styles.pokemonList}>
          {pokemons.map((pokemon) => (
            <li
              key={pokemon.no}
              role="listitem"
              className={styles.pokemonListItem}
            >
              <PokemonTile
                no={pokemon.no}
                name={pokemon.name}
                image={pokemon.sprite ?? ""}
                types={pokemon.types}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
