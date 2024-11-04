import { useFormContext } from "#frontend/features/payment/providers/form-context";
import styles from "./step.module.css";

const stepData: {
  [key: number]: string;
} = {
  1: "Your info",
  2: "See plan",
  3: "Add-ons",
  4: "Summary",
};

export function StepList() {
  const { currentStep } = useFormContext();
  const maxStep = 4;

  return (
    <aside className={styles.steps}>
      {Array.from({ length: maxStep }, (_, index) => {
        const transformedIndex = index + 1;

        return (
          <div key={index}>
            <div
              className={[
                styles.step,
                transformedIndex === currentStep ? styles.active : undefined,
              ].join(" ")}
            >
              {transformedIndex}
            </div>
            <div className={styles["step-info"]}>
              <span>STEP {transformedIndex}</span>
              <span>{stepData[transformedIndex].toLocaleUpperCase()}</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
