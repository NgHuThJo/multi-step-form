import { createContext, PropsWithChildren, useMemo, useState } from "react";
import { useContextWrapper } from "#frontend/utils/context";

type FormData = {
  [key: number]: {};
};
type FormDataApi = {
  saveFormData: (step: number, data: number) => void;
};

const FormContext = createContext<FormData | null>(null);
const FormContextApi = createContext<FormDataApi | null>(null);

export const useAuthContext = () =>
  useContextWrapper(FormContext, "AuthContext is null");
export const useAuthContextApi = () =>
  useContextWrapper(FormContextApi, "AuthContextApi is null");

export function FormContextProvider({ children }: PropsWithChildren) {
  const [formData, setFormData] = useState<FormData>();

  const contextValue = { formData };

  const api = useMemo(() => {
    const saveFormData = (step: number, data: number) => {
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
