import { icon_thank_you } from "#frontend/assets/resources/images";
import { Card } from "#frontend/features/shared/card/card";
import styles from "./thank-you.module.css";

export function ThankYou() {
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles["thank-you"]}>
          <img src={icon_thank_you} alt="" />
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </Card>
    </div>
  );
}
