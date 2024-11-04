import { createContext, PropsWithChildren, useMemo, useState } from "react";
import { useContextWrapper } from "#frontend/utils/context";

type AddonType = "online-service" | "larger-storage" | "customizable-profile";

export type PlanType = "arcade" | "advanced" | "pro";
export type FormDataStep = PersonalInfo | Plan | Addons;
export type PayMode = "month" | "year";
export type Addons = [[AddonType, string]];
export type Step = 1 | 2 | 3 | 4;
export type PersonalInfo = {
  email: string;
  name: string;
  phone: string;
};

type Plan = {
  plan: PlanType;
  pay: PayMode;
};

type FormDataType = {
  1?: PersonalInfo;
  2?: Plan;
  3?: Addons;
};

type FormContextType = {
  formData: FormDataType;
  currentStep: Step;
};
type FormContextApiType = {
  saveFormData: (step: Step, data: FormDataStep) => void;
  goNext: () => void;
  goBack: () => void;
};

export const planCostMap: Record<PlanType, number> = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const FormContext = createContext<FormContextType | null>(null);
const FormContextApi = createContext<FormContextApiType | null>(null);

export const useFormContext = () =>
  useContextWrapper(FormContext, "AuthContext is null");
export const useFormContextApi = () =>
  useContextWrapper(FormContextApi, "AuthContextApi is null");

export function FormContextProvider({ children }: PropsWithChildren) {
  const [formData, setFormData] = useState<FormDataType>({});
  const [currentStep, setCurrentStep] = useState<Step>(1);

  const contextValue = { formData, currentStep };

  const api = useMemo(() => {
    const saveFormData = (step: Step, data: FormDataStep) => {
      setFormData((prev) => ({ ...prev, [step]: data }));
    };

    const goNext = () => {
      if (currentStep < 4) {
        setCurrentStep((prev) => (prev + 1) as Step);
      }
    };

    const goBack = () => {
      if (currentStep > 0) {
        setCurrentStep((prev) => (prev - 1) as Step);
      }
    };

    return { goNext, saveFormData, goBack };
  }, [currentStep]);

  return (
    <FormContextApi.Provider value={api}>
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    </FormContextApi.Provider>
  );
}
