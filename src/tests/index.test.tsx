import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HomePage } from "@/routes/index";

describe("HomePage", () => {
  it("renders placeholder content", () => {
    render(<HomePage />);

    expect(screen.getByText("Hello from eventownik")).toBeInTheDocument();
  });
});
