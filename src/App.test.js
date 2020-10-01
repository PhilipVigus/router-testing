import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders the heading", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    expect(
      screen.getByRole("heading", { name: "Testing with react routers" })
    ).toBeInTheDocument();
  });

  it("navigates to the first component", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const link = screen.getByRole("link", { name: "Go to first component" });
    fireEvent.click(link);

    expect(
      screen.getByRole("heading", { name: "First component" })
    ).toBeInTheDocument();
  });
});
