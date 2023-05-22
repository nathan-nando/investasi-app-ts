import { render, screen } from "@testing-library/react";
import { Root } from "./Root";

test("renders root", () => {
  render(<Root />);
  const linkElement = screen.getByText(/root/i);
  expect(linkElement).toBeInTheDocument();
});
