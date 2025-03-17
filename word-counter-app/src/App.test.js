import { render, screen } from "@testing-library/react";
import App from "./Appw"; // ✅ Use correct path if test file is inside another folder

test("renders Word Counter title", () => {
  render(<App />);
  const titleElement = screen.getByText(/word counter/i);
  expect(titleElement).toBeInTheDocument();
});
