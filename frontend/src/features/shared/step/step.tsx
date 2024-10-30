import { MouseEvent } from "react";
import {
  useFormContext,
  useFormContextApi,
} from "#frontend/features/payment/providers/form-context";
import { Step } from "#frontend/features/payment/providers/form-context";
import styles from "./step.module.css";

export function StepList() {
  const { currentStep } = useFormContext();
  const { switchStep } = useFormContextApi();
  const maxStep = 4;

  const handleSwitch = (event: MouseEvent<HTMLButtonElement>) => {
    const nextStep = Number(event.currentTarget.textContent) as Step;

    switchStep(nextStep);
  };

  return (
    <aside className={styles.steps}>
      {Array.from({ length: maxStep }, (_, index) => {
        const transformedIndex = index + 1;

        return (
          <button
            disabled={transformedIndex > currentStep + 1 ? true : false}
            onClick={handleSwitch}
          >
            {transformedIndex}
          </button>
        );
      })}
    </aside>
  );
}
