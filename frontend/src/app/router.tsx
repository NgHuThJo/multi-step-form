import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoot } from "./root";
import { ErrorRoute } from "./routes/error";
import { PersonalInfo } from "#frontend/features/payment/components/personal-info/personal-info";
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
  const router = createBrowserRouter(routesConfig);

  return <RouterProvider router={router} />;
}
