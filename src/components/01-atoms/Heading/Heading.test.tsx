import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading component", () => {
  it("renders text", () => {
    render(<Heading level="3">Sample heading</Heading>);

    expect(screen.getByText("Sample heading"));
  });

  it("has the correct heading", () => {
    const { getByRole } = render(<Heading level="3">Sample heading</Heading>);

    expect(getByRole("heading", { level: 3 }));
  });
});
