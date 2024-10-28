import { Card } from "#frontend/features/shared/card/card";
import { RouterLink } from "#frontend/components/ui/navigation/link/router-link";
import styles from "./plan.module.css";
import {
  icon_arcade,
  icon_advanced,
  icon_pro,
} from "#frontend/assets/resources/images";

export function Plan() {
  return (
    <div className={styles.container}>
      <Card>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <form action="" method="post">
          <label className={styles.option} tabIndex={0}>
            <input
              type="radio"
              name="plan"
              className={styles["sr-only"]}
              tabIndex={-1}
            />
            <div>
              <img src={icon_arcade} alt="" />
            </div>
            <div>
              <h2>Arcade</h2>
              <span>$9/mo</span>
            </div>
          </label>
          <label className={styles.option} tabIndex={0}>
            <input
              type="radio"
              name="plan"
              className={styles["sr-only"]}
              tabIndex={-1}
            />
            <div>
              <img src={icon_advanced} alt="" />
            </div>
            <div>
              <h2>Advanced</h2>
              <span>$12/mo</span>
            </div>
          </label>
          <label className={styles.option} tabIndex={0}>
            <input
              type="radio"
              name="plan"
              className={styles["sr-only"]}
              tabIndex={-1}
            />
            <div>
              <img src={icon_pro} alt="" />
            </div>
            <div>
              <h2>Pro</h2>
              <span>$15/mo</span>
            </div>
          </label>
        </form>
        <div className={styles["payment-plan"]}>
          <span>Monthly</span>
          <div className={styles.switch}>
            <button></button>
            <button></button>
          </div>
          <span>Yearly</span>
        </div>
      </Card>
      <div className={styles.bottom}>
        <RouterLink to="/">Go Back</RouterLink>
        <RouterLink to="/addons" className="next-step">
          Next Step
        </RouterLink>
      </div>
    </div>
  );
}
