import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "#frontend/features/payment/providers/form-context";
import { Card } from "#frontend/features/shared/card/card";
import { RouterLink } from "#frontend/components/ui/navigation/link/router-link";
import { capitalizeFirstLetter } from "#frontend/utils/string";
import styles from "./finish-up.module.css";

export function FinishUp() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { formData } = useFormContext();
  const navigate = useNavigate();

  const { "2": two, "3": three } = formData;

  return (
    <div className={styles.container}>
      <Card>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className={styles.summary}>
          <div>
            <div>
              <span>
                Arcade ({two?.pay === "month" ? "Monthly" : "Yearly"})
              </span>
              <button>Change</button>
            </div>
            <span>+$9/mo</span>
          </div>
          <div className={styles.divider}></div>
          {three?.map(([key, value]) => (
            <div>
              <span>{capitalizeFirstLetter(key).split("-").join(" ")}</span>
              <span>
                $
                {`${two?.pay === "month" ? `${value}/mo` : `${Number(value) * 10}/yr`}`}
              </span>
            </div>
          ))}
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
