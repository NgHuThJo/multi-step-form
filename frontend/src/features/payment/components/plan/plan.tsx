import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useFormContextApi,
  PayMode,
  PlanType,
} from "#frontend/features/payment/providers/form-context";
import { Card } from "#frontend/features/shared/card/card";
import styles from "./plan.module.css";
import {
  icon_arcade,
  icon_advanced,
  icon_pro,
} from "#frontend/assets/resources/images";

export function Plan() {
  const [switchState, setSwitchState] = useState<PayMode>("month");
  const formRef = useRef<HTMLFormElement | null>(null);
  const { saveFormData, goBack, goNext } = useFormContextApi();
  const navigate = useNavigate();

  const handleNext = () => {
    if (!formRef.current || !formRef.current.checkValidity()) {
      return;
    }

    let formData = Object.fromEntries(
      new FormData(formRef.current),
    ) as unknown as {
      plan: PlanType;
    };

    saveFormData(2, {
      ...formData,
      pay: switchState,
    });
    goNext();

    return navigate("/addons");
  };

  const handleSwitch = () => {
    setSwitchState((prev) => (prev === "month" ? "year" : "month"));
  };

  const handleBack = () => {
    goBack();

    return navigate("/");
  };

  return (
    <div className={styles.container}>
      <Card>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <form action="" method="post" ref={formRef}>
          <label className={styles.option} tabIndex={0}>
            <input
              type="radio"
              name="plan"
              value="arcade"
              className={styles["sr-only"]}
              tabIndex={-1}
            />
            <div>
              <img src={icon_arcade} alt="" />
            </div>
            <div>
              <h2>Arcade</h2>
              <div>${`${switchState === "month" ? "9/mo" : "90/yr"}`}</div>
              <div
                className={[
                  styles.grid,
                  switchState === "year" ? styles.open : "",
                ].join(" ")}
              >
                <div className={styles.hidden}>2 months free</div>
              </div>
            </div>
          </label>
          <label className={styles.option} tabIndex={0}>
            <input
              type="radio"
              name="plan"
              value="advanced"
              className={styles["sr-only"]}
              tabIndex={-1}
            />
            <div>
              <img src={icon_advanced} alt="" />
            </div>
            <div>
              <h2>Advanced</h2>
              <div>${`${switchState === "month" ? "12/mo" : "120/yr"}`}</div>
              <div
                className={[
                  styles.grid,
                  switchState === "year" ? styles.open : "",
                ].join(" ")}
              >
                <div className={styles.hidden}>2 months free</div>
              </div>
            </div>
          </label>
          <label className={styles.option} tabIndex={0}>
            <input
              type="radio"
              name="plan"
              value="pro"
              className={styles["sr-only"]}
              tabIndex={-1}
            />
            <div>
              <img src={icon_pro} alt="" />
            </div>
            <div>
              <h2>Pro</h2>
              <div>${`${switchState === "month" ? "15/mo" : "150/yr"}`}</div>
              <div
                className={[
                  styles.grid,
                  switchState === "year" ? styles.open : "",
                ].join(" ")}
              >
                <div className={styles.hidden}>2 months free</div>
              </div>
            </div>
          </label>
        </form>
        <div className={styles["payment-plan"]}>
          <span>Monthly</span>
          <div className={styles.switch}>
            <button
              type="button"
              onClick={handleSwitch}
              className={switchState === "year" ? styles.yearly : undefined}
            ></button>
          </div>
          <span>Yearly</span>
        </div>
      </Card>
      <div className={styles.bottom}>
        <button type="button" onClick={handleBack}>
          Go Back
        </button>
        <button type="button" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}
