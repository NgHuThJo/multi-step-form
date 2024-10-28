import { Card } from "#frontend/features/shared/card/card";
import { RouterLink } from "#frontend/components/ui/navigation/link/router-link";
import styles from "./finish-up.module.css";

export function FinishUp() {
  return (
    <div className={styles.container}>
      <Card>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className={styles.summary}>
          <div>
            <div>
              <span>Arcade (Monthly)</span>
              <button>Change</button>
            </div>
            <span>+$9/mo</span>
          </div>
          <div className={styles.divider}></div>
          <div>
            <span>Online service</span>
            <span>+$1/mo</span>
          </div>
          <div>
            <span>Larger storage</span>
            <span>+$2/mo</span>
          </div>
        </div>
      </Card>
      <div className={styles.bottom}>
        <RouterLink to="/addons">Go Back</RouterLink>
        <RouterLink to="/thankyou" className="finish-step">
          Confirm
        </RouterLink>
      </div>
    </div>
  );
}
