import { PokemonClient } from "pokenode-ts";

export type PokemonInfo = {
  no: number;
  name: string;
  sprite: string | null;
  animatedSprite: string | null;
  types: string[];
};

export type PokemonDetailInfo = PokemonInfo & {
  flavorText: string;
};

export const FAVORITE_POKEMON_IDS = [4, 25, 94, 151, 158, 374];

export const getClient = () => {
  return new PokemonClient();
};

export const getPokemonDetailById = async (id: number) => {
  const pokemon = await getClient().getPokemonById(id);
  const species = await getClient().getPokemonSpeciesById(id);

  const pokemonInfo: PokemonDetailInfo = {
    no: pokemon.id,
    name: pokemon.name,
    sprite: pokemon.sprites.front_default,
    animatedSprite:
      pokemon.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    types: pokemon.types.map((t) => t.type.name),
    flavorText: species.flavor_text_entries[0].flavor_text,
  };

  return pokemonInfo;
};

export const listFavoritePokemons = async () => {
  const list = await Promise.all(
    FAVORITE_POKEMON_IDS.map(async (id) => {
      return await getClient().getPokemonById(id);
    })
  );
  const pokemonInfos: PokemonInfo[] = [];

  for (const pokemon of list) {
    pokemonInfos.push({
      no: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
      animatedSprite:
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
      types: pokemon.types.map((t) => t.type.name),
    });
  }

  return pokemonInfos;
};
