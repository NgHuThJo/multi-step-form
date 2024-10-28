import { Card } from "#frontend/features/shared/card/card";
import { Checkbox } from "#frontend/components/ui/form/checkbox/checkbox";
import { RouterLink } from "#frontend/components/ui/navigation/link/router-link";
import styles from "./addons.module.css";

export function Addons() {
  return (
    <div className={styles.container}>
      <Card>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <form action="" method="post">
          <label htmlFor="online-service" tabIndex={0}>
            <Checkbox name="online-service" />
            <div>
              <h2>Online service</h2>
              <span>Access to multiplayer games</span>
            </div>
            <span>+$1/mo</span>
          </label>
          <label htmlFor="larger-storage" tabIndex={0}>
            <Checkbox name="larger-storage" />
            <div>
              <h2>Larger storage</h2>
              <span>Extra 1TB of cloud save</span>
            </div>
            <span>+$2/mo</span>
          </label>
          <label htmlFor="customizable-profile" tabIndex={0}>
            <Checkbox name="customizable-profile" />
            <div>
              <h2>Customizable profile</h2>
              <span>Custom theme on your profile</span>
            </div>
            <span>+$1/mo</span>
          </label>
        </form>
      </Card>
      <div className={styles.bottom}>
        <RouterLink to="/plan">Go Back</RouterLink>
        <RouterLink to="/finishup" className="next-step">
          Next Step
        </RouterLink>
      </div>
    </div>
  );
}
