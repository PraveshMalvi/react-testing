import { render, screen } from "../../TestUtils";
import MuiMode from "./MuiMode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />);
    const textElement = screen.getByRole("heading");
    expect(textElement).toHaveTextContent("dark mode");
  });
});
