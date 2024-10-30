import {
  useFormContext,
  planCostMap,
  useFormContextApi,
} from "#frontend/features/payment/providers/form-context";
import { Card } from "#frontend/features/shared/card/card";
import { RouterLink } from "#frontend/components/ui/navigation/link/router-link";
import { capitalizeFirstLetter } from "#frontend/utils/string";
import styles from "./finish-up.module.css";

export function FinishUp() {
  const { formData } = useFormContext();
  const { saveFormData } = useFormContextApi();

  const { "2": two, "3": three } = formData;
  let totalCost = 0;

  if (two?.plan) {
    totalCost = planCostMap[two.plan];

    if (three) {
      for (const [_key, value] of three) {
        totalCost += Number(value);
      }
    }
  }

  const handleChange = () => {
    if (formData[2]) {
      saveFormData(2, {
        plan: formData[2]?.plan,
        pay: formData[2]?.pay === "month" ? "year" : "month",
      });
    }
  };

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
              <button type="button" onClick={handleChange}>
                Change
              </button>
            </div>
            <span>{`$${two?.pay === "month" ? `${planCostMap[two.plan]}/mo` : `${planCostMap[two.plan] * 10}/yr`}`}</span>
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
        <div className={styles.total}>
          <span>Total (per year)</span>
          <span>{`$${two?.pay === "month" ? `${totalCost}/mo` : `${totalCost * 10}/yr`}`}</span>
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
