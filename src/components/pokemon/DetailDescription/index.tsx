import Image from "next/image";
import { FC } from "react";
import styles from "./index.module.css";

type Props = {
  no: number;
  name: string;
  sprite: string;
  types: string[];
  flavorText: string;
};

export const DetailDescription: FC<Props> = ({
  no,
  name,
  sprite,
  types,
  flavorText,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.pokemonImageOuter}>
        <Image
          src={sprite}
          width="160"
          height="160"
          alt=""
          className={styles.pokemonImage}
          style={{
            viewTransitionName: `pokemon-image-${no}`,
          }}
        />
      </div>

      <p>No. {no}</p>
      <h2>{name}</h2>
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
      <p>{flavorText}</p>
    </section>
  );
};
