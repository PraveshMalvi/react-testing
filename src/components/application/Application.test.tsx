import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const heading1 = screen.getByRole("heading", {
      level: 1,
    });
    expect(heading1).toBeInTheDocument();

    const heading2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(heading2).toBeInTheDocument();

    const pElement = screen.getByText(/All fields are mandatory/);
    expect(pElement).toBeInTheDocument();

    const pElement2 = screen.getByText("mandatory", {
      exact: false,
    });
    expect(pElement2).toBeInTheDocument();

    const pElement3 = screen.getByText((content) =>
      content.endsWith("mandatory")
    );
    expect(pElement3).toBeInTheDocument();

    const titleElement = screen.getByTitle("close");
    expect(titleElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("laptop");
    expect(imgElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const nameInput = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameInput).toBeInTheDocument();

    const nameInput2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameInput2).toBeInTheDocument();

    const nameInput3 = screen.getByPlaceholderText("Fullname");
    expect(nameInput3).toBeInTheDocument();

    const nameInput4 = screen.getByDisplayValue("");
    expect(nameInput4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsCheckbox = screen.getByRole("checkbox");
    expect(termsCheckbox).toBeInTheDocument();

    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();
    expect(submitBtnElement).not.toBeEnabled();
  });
});
