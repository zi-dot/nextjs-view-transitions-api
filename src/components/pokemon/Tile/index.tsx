import Image from "next/image";
import styles from "./index.module.css";
import { FC, useState } from "react";
import viewTransitionName from "@/styles/viewTransitionName.module.css";
import clsx from "clsx";
import { TransitionLink } from "@/components/shared/TransitionLink";

type Props = {
  no: number;
  name: string;
  image: string;
  types: string[];
};

export const PokemonTile: FC<Props> = ({ no, name, image, types }) => {
  const [imageClassName, setImageClassName] = useState(styles.pokemonImage);

  return (
    <TransitionLink
      href={`/detail/${no}`}
      onClick={() => {
        setImageClassName(
          clsx(styles.pokemonImage, viewTransitionName.pokemonImage)
        );
      }}
    >
      <div className={styles.pokemonTile}>
        <div className={styles.pokemonImageOuter}>
          <Image
            src={image}
            alt={name}
            className={imageClassName}
            width="160"
            height="160"
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
