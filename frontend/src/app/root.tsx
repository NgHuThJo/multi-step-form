import { FormContextProvider } from "#frontend/features/payment/providers/form-context";
import { Outlet } from "react-router-dom";
import { PageLayout } from "#frontend/components/layouts/page/page";

export function AppRoot() {
  return (
    <FormContextProvider>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </FormContextProvider>
  );
}
