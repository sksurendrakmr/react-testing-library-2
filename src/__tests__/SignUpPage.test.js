import React from "react";
import { render, screen } from "@testing-library/react";
import { SignUpPage } from "../components/SignUpPage";

describe("Sign Up Page", () => {
  test("should render header ", () => {
    render(<SignUpPage />);
    const headerTitle = screen.getByRole("heading", { name: /sign up/i });
    expect(headerTitle).toBeInTheDocument();
  });

  test("should have username input", () => {
    render(<SignUpPage />);
    const userNameInput = screen.getByPlaceholderText(/enter username/i);
    expect(userNameInput).toBeInTheDocument();
  });
  test("should have email input", () => {
    render(<SignUpPage />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
  });
  test("should have password input", () => {
    render(<SignUpPage />);
    const passwordInput = screen.getByLabelText(/^password$/i);
    expect(passwordInput).toBeInTheDocument();
  });
  test("should have password type input", () => {
    render(<SignUpPage />);
    const passwordInput = screen.getByLabelText(/^password$/i);
    expect(passwordInput.type).toBe("password");
  });
  test("should have confirm password input", () => {
    render(<SignUpPage />);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    expect(confirmPasswordInput).toBeInTheDocument();
  });
  test("confirm password input should have password type input", () => {
    render(<SignUpPage />);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    expect(confirmPasswordInput.type).toBe("password");
  });

  test("should have submit button", () => {
    render(<SignUpPage />);
    const submitButton = screen.getByRole("button", { name: /sign up/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("submit button should be disable by default", () => {
    render(<SignUpPage />);
    const submitButton = screen.getByRole("button", { name: /sign up/i });
    expect(submitButton).toBeDisabled();
  });
});
