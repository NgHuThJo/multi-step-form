import { PropsWithChildren } from "react";
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
            <source media={`(max-width: ${m}px)`} srcSet={bg_sidebar_mobile} />
            <source
              media={`(min-width: ${m + 1}px)`}
              srcSet={bg_sidebar_desktop}
            />
            <source />
            <img src={bg_sidebar_mobile} alt="" />
          </picture>
          <div className={styles.steps}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </aside>
      </div>
      {children}
    </main>
  );
}
