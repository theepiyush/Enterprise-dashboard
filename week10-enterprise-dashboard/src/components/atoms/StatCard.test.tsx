import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatCard } from "./StatCard";

describe("StatCard", () => {
  it("renders the metric and delta", () => {
    render(<StatCard label="Revenue" value="$10,000" delta="+12%" />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("$10,000")).toBeInTheDocument();
    expect(screen.getByText("+12% vs previous period")).toBeInTheDocument();
  });
});