import { FC } from "react";
import { BaseHeader } from "../shared/BaseHeader";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <BaseHeader />
      </div>
      <main className={styles.content}>{children}</main>
    </div>
  );
};
