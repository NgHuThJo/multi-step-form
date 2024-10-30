import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormDataStep,
  useFormContextApi,
} from "#frontend/features/payment/providers/form-context";
import { Card } from "#frontend/features/shared/card/card";
import {
  personalInfoSchema,
  PersonalInfoSchemaError,
} from "#frontend/types/zod";
import styles from "./personal-info.module.css";

export function PersonalInfo() {
  const [error, setError] = useState<PersonalInfoSchemaError>({});
  const formRef = useRef<HTMLFormElement | null>(null);
  const { saveFormData } = useFormContextApi();
  const navigate = useNavigate();

  const handleNext = () => {
    if (!formRef.current) {
      return;
    }

    let formData = Object.fromEntries(
      new FormData(formRef.current),
    ) as unknown as FormDataStep;

    const parsedData = personalInfoSchema.safeParse(formData);

    if (!parsedData.success) {
      return setError({
        errors: {
          fieldErrors: parsedData.error.flatten().fieldErrors,
        },
      });
    }

    saveFormData(1, formData);

    return navigate("/plan");
  };

  return (
    <div className={styles.container}>
      <Card>
        <h1>Personal info</h1>
        <p>Please provide your name, email, address, and phone number.</p>
        <form action="" method="post" ref={formRef}>
          <label htmlFor="name">
            <div>
              <span>Name</span>
              {error?.errors?.fieldErrors?.name && (
                <span className={styles.error}>
                  {error.errors.fieldErrors.name}
                </span>
              )}
            </div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
              required
            />
          </label>
          <label htmlFor="email">
            <div>
              <span>Email Address</span>
              {error?.errors?.fieldErrors?.email && (
                <span className={styles.error}>
                  {error.errors.fieldErrors.email}
                </span>
              )}
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              required
            />
          </label>
          <label htmlFor="phone">
            <div>
              <span>Phone Number</span>
              {error?.errors?.fieldErrors?.phone && (
                <span className={styles.error}>
                  {error.errors.fieldErrors.phone}
                </span>
              )}
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              required
            />
          </label>
        </form>
      </Card>
      <div className={styles.bottom}>
        <button onClick={handleNext}>Next Step</button>
      </div>
    </div>
  );
}
