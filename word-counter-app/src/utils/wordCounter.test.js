import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Word Counter title", () => {
  render(<App />);
  const titleElement = screen.getByText(/word counter/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders file input element", () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/upload file/i) || screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});
