import { PropsWithChildren } from "react";
import styles from "./card.module.css";

export function Card({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
