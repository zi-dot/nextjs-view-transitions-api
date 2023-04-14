import Image from "next/image";
import styles from "./index.module.css";
import { FC } from "react";
import { TransitionLink } from "@/components/shared/TransitionLink";

type Props = {
  no: number;
  name: string;
  image: string;
  types: string[];
};

export const PokemonTile: FC<Props> = ({ no, name, image, types }) => {
  return (
    <TransitionLink href={`/detail/${no}`}>
      <div className={styles.pokemonTile}>
        <div className={styles.pokemonImageOuter}>
          <Image
            src={image}
            alt={name}
            className={styles.pokemonImage}
            width="160"
            height="160"
            style={{
              viewTransitionName: `pokemon-image-${no}`,
            }}
          />
        </div>
        <ul className={styles.pokemonTypes}>
          {types.map((type) => (
            <li key={type}>
              <Image
                src={`/types/${type}.png`}
                width="32"
                height="32"
                alt={type}
              />
            </li>
          ))}
        </ul>
      </div>
    </TransitionLink>
  );
};
