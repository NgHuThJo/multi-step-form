import { PropsWithChildren } from "react";
import { StepList } from "#frontend/features/shared/step/step";
import { getBreakpoints } from "#frontend/utils/breakpoints";
import styles from "./page.module.css";
import {
  bg_sidebar_desktop,
  bg_sidebar_mobile,
} from "#frontend/assets/resources/images";

const { m } = getBreakpoints();

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <main className={styles.main}>
      <div>
        <aside className={styles.sidebar}>
          <picture>
            <source
              media={`(max-width: ${m - 1}px)`}
              srcSet={bg_sidebar_mobile}
            />
            <source media={`(min-width: ${m}px)`} srcSet={bg_sidebar_desktop} />
            <source />
            <img src={bg_sidebar_mobile} alt="" />
          </picture>
          <StepList />
        </aside>
        {children}
      </div>
    </main>
  );
}
