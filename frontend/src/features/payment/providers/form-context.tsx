import { createContext, PropsWithChildren, useMemo, useState } from "react";
import { useContextWrapper } from "#frontend/utils/context";

type AddonType = "online-service" | "larger-storage" | "customizable-profile";
type PlanType = "arcade" | "advanced" | "pro";

export type FormDataStep = PersonalInfo | Plan;
export type PayMode = "month" | "year";
export type Addons = [[string, string]];

type PersonalInfo = {
  email: string;
  name: string;
  phone: number;
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
};
type FormContextApiType = {
  saveFormData: (step: number, data: FormDataStep) => void;
};

const FormContext = createContext<FormContextType | null>(null);
const FormContextApi = createContext<FormContextApiType | null>(null);

export const useFormContext = () =>
  useContextWrapper(FormContext, "AuthContext is null");
export const useFormContextApi = () =>
  useContextWrapper(FormContextApi, "AuthContextApi is null");

export function FormContextProvider({ children }: PropsWithChildren) {
  const [formData, setFormData] = useState<FormDataType>({});

  console.log(formData);

  const contextValue = { formData };

  const api = useMemo(() => {
    const saveFormData = (step: number, data: FormDataStep) => {
      setFormData((prev) => ({ ...prev, [step]: data }));
    };

    return { saveFormData };
  }, []);

  return (
    <FormContextApi.Provider value={api}>
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    </FormContextApi.Provider>
  );
}
