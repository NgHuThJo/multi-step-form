import { createContext, PropsWithChildren, useMemo, useState } from "react";
import { useContextWrapper } from "#frontend/utils/context";

export type FormDataStep = PersonalInfo;

type PersonalInfo = {
  email: string;
  name: string;
  phone: number;
};

type FormData =
  | {
      1: PersonalInfo;
      2: {};
    }
  | {};
type FormDataApi = {
  saveFormData: (step: number, data: FormDataStep) => void;
};

const FormContext = createContext<FormData | null>(null);
const FormContextApi = createContext<FormDataApi | null>(null);

export const useFormContext = () =>
  useContextWrapper(FormContext, "AuthContext is null");
export const useFormContextApi = () =>
  useContextWrapper(FormContextApi, "AuthContextApi is null");

export function FormContextProvider({ children }: PropsWithChildren) {
  const [formData, setFormData] = useState<FormData>({});

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
