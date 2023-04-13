import clsx from "clsx";
import styles from "./index.module.css";
import viewTransitionName from "@/styles/viewTransitionName.module.css";
import { Inter } from "next/font/google";
import { FC } from "react";
import { TransitionLink } from "../TransitionLink";

const inter = Inter({ subsets: ["latin"] });

export const BaseHeader: FC = () => {
  return (
    <header
      className={clsx(
        inter.className,
        styles.header,
        viewTransitionName.header
      )}
    >
      <TransitionLink href="/">
        <h1
          className={clsx(styles.headerTitle, viewTransitionName.headerTitle)}
        >
          好きな
          <br />
          ポケモンたち
        </h1>
      </TransitionLink>
    </header>
  );
};
