import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  useFormContext,
  useFormContextApi,
} from "#frontend/features/payment/providers/form-context";
import { Card } from "#frontend/features/shared/card/card";
import { Checkbox } from "#frontend/components/ui/form/checkbox/checkbox";
import { RouterLink } from "#frontend/components/ui/navigation/link/router-link";
import styles from "./addons.module.css";

export function Addons() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { formData } = useFormContext();
  const { saveFormData } = useFormContextApi();
  const navigate = useNavigate();

  const handleNext = () => {
    if (!formRef.current || !formRef.current.checkValidity()) {
      return;
    }

    let formData = Array.from(new FormData(formRef.current));

    saveFormData(3, formData);

    return navigate("/finishup");
  };

  return (
    <div className={styles.container}>
      <Card>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <form action="" method="post" ref={formRef}>
          <label htmlFor="online-service" tabIndex={0}>
            <Checkbox name="online-service" value="1" />
            <div>
              <h2>Online service</h2>
              <span>Access to multiplayer games</span>
            </div>
            <div>{`$${formData[2]?.pay === "month" ? "1/mo" : "10/yr"}`}</div>
          </label>
          <label htmlFor="larger-storage" tabIndex={0}>
            <Checkbox name="larger-storage" value="2" />
            <div>
              <h2>Larger storage</h2>
              <span>Extra 1TB of cloud save</span>
            </div>
            <div>{`$${formData[2]?.pay === "month" ? "2/mo" : "20/yr"}`}</div>
          </label>
          <label htmlFor="customizable-profile" tabIndex={0}>
            <Checkbox name="customizable-profile" value="2" />
            <div>
              <h2>Customizable profile</h2>
              <span>Custom theme on your profile</span>
            </div>
            <div>{`$${formData[2]?.pay === "month" ? "1/mo" : "10/yr"}`}</div>
          </label>
        </form>
      </Card>
      <div className={styles.bottom}>
        <RouterLink to="/plan">Go Back</RouterLink>
        <button type="button" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}
