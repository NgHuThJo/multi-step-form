import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { routesConfig } from "#frontend/app/router";

describe("PersonalInfo", () => {
  const user = userEvent.setup();

  it("should submit successfully with valid input and redirect to /plan", async () => {
    const router = createMemoryRouter(routesConfig, { initialEntries: ["/"] });
    render(<RouterProvider router={router} />);

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email Address");
    const phoneInput = screen.getByLabelText("Phone Number");
    const submitButton = screen.getByRole("button", { name: /Next Step/i });

    await user.type(nameInput, "John");
    await user.type(emailInput, "email@email.com");
    await user.type(phoneInput, "+0123456789");
    await user.click(submitButton);

    await waitFor(() => {
      expect(router.state.location.pathname).toBe("/plan");
    });
  });

  it("should show errors on submit with invalid data", async () => {
    const router = createMemoryRouter(routesConfig, { initialEntries: ["/"] });
    render(<RouterProvider router={router} />);

    const submitButton = screen.getByRole("button", { name: /Next Step/i });
    await user.click(submitButton);

    const nameError = screen.getByText(/Name must have at least 1 character/i);
    const emailError = screen.getByText(/Email address is invalid/i);
    const phoneError = screen.getByText(
      /Phone number must have 10 digits preceded by a plus sign/i,
    );

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(phoneError).toBeInTheDocument();
  });
});
