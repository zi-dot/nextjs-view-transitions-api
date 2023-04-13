import { FC } from "react";
import { TransitionLink } from "../TransitionLink";

import viewTransitionName from "@/styles/viewTransitionName.module.css";
import styles from "./index.module.css";
import clsx from "clsx";

type Props = {
  nextHref: string | null;
  prevHref: string | null;
};

export const PrevAndNext: FC<Props> = ({ nextHref, prevHref }) => {
  return (
    <ul
      className={clsx(
        viewTransitionName.pokemonNextAndPrev,
        styles.prevAndNext
      )}
    >
      <li>
        <TransitionLink {...(prevHref !== null ? { href: prevHref } : {})}>
          <span
            className={clsx(
              styles.prevAndNextButton,
              prevHref === null && styles.disabled
            )}
          >
            {"<"}
          </span>
        </TransitionLink>
      </li>
      <li>
        <TransitionLink {...(nextHref !== null ? { href: nextHref } : {})}>
          <span
            className={clsx(
              styles.prevAndNextButton,
              nextHref === null && styles.disabled
            )}
          >
            {">"}
          </span>
        </TransitionLink>
      </li>
    </ul>
  );
};
