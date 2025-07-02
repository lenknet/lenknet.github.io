import { render, cleanup } from "@testing-library/react";
import { Heading, Typography } from "./Typography";

it("should render <p> by default", async () => {
  const el = render(<Typography>Hello</Typography>).getByText("Hello");
  expect(el.nodeName).toEqual("P");
});

it("should render <span> if inline", async () => {
  const el = render(<Typography inline>Hello</Typography>).getByText("Hello");
  expect(el.nodeName).toEqual("SPAN");
});

it("should render heading", () => {
  const headings = ["h1", "h2", "h3", "h4"] as const;
  headings.forEach((value) => {
    cleanup();
    const el = render(<Heading level={value}>Hello</Heading>).getByText("Hello");
    expect(el.nodeName).toEqual(value.toUpperCase());
    expect(el.className).toContain("heading-" + value);
  });
});
