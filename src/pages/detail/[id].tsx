import {
  FAVORITE_POKEMON_IDS,
  PokemonDetailInfo,
  getPokemonDetailById,
} from "@/lib/pokemon";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { DetailDescription } from "@/components/pokemon/DetailDescription";
import { TransitionLink } from "@/components/shared/TransitionLink";
import { PrevAndNext } from "@/components/shared/PrevAndNext";

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const paths = FAVORITE_POKEMON_IDS.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  pokemon: PokemonDetailInfo;
  nextNo: number | null;
  prevNo: number | null;
}> = async ({ params }) => {
  const id = params?.id;
  const pokemon = await getPokemonDetailById(Number(id));
  const nextNoIndex =
    FAVORITE_POKEMON_IDS.findIndex((no) => no === pokemon.no) + 1;
  const prevNoIndex =
    FAVORITE_POKEMON_IDS.findIndex((no) => no === pokemon.no) - 1;

  const nextNo =
    FAVORITE_POKEMON_IDS.length > nextNoIndex
      ? FAVORITE_POKEMON_IDS[nextNoIndex]
      : null;

  const prevNo = prevNoIndex >= 0 ? FAVORITE_POKEMON_IDS[prevNoIndex] : null;

  console.log(nextNo, prevNo);

  return {
    props: {
      pokemon,
      nextNo,
      prevNo,
    },
  };
};

const PokemonDetail = ({
  pokemon,
  nextNo,
  prevNo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <DetailDescription
        no={pokemon.no}
        name={pokemon.name}
        sprite={pokemon.animatedSprite ?? ""}
        types={pokemon.types}
        flavorText={pokemon.flavorText}
      />
      <PrevAndNext
        prevHref={prevNo === null ? null : `/detail/${prevNo}`}
        nextHref={nextNo === null ? null : `/detail/${nextNo}`}
      />
    </>
  );
};

export default PokemonDetail;
