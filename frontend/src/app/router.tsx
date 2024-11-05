import { createHashRouter, RouterProvider } from "react-router-dom";
import { AppRoot } from "./root";
import { ErrorRoute } from "./routes/error";
import { Addons } from "#frontend/features/payment/components/addons/addons";
import { FinishUp } from "#frontend/features/payment/components/finish-up/finish-up";
import { PersonalInfo } from "#frontend/features/payment/components/personal-info/personal-info";
import { Plan } from "#frontend/features/payment/components/plan/plan";
import { ThankYou } from "#frontend/features/payment/components/thank-you/thank-you";
import { NotFoundRoute } from "./routes/not-found";

export const routesConfig = [
  {
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <AppRoot />,
        children: [
          {
            index: true,
            element: <PersonalInfo />,
          },
          {
            path: "/plan",
            element: <Plan />,
          },
          {
            path: "/addons",
            element: <Addons />,
          },
          {
            path: "/finishup",
            element: <FinishUp />,
          },
          {
            path: "/thankyou",
            element: <ThankYou />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundRoute />,
  },
];

export function Router() {
  const router = createHashRouter(routesConfig);

  return <RouterProvider router={router} />;
}
