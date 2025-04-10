import { logRoles, render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["Html", "Css", "Js"];
  test("renders list correctly", () => {
    render(<Skills skills={skills} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  test("renders a list of items", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  test("render login button", () => {
    render(<Skills skills={skills} />);
    const loginBtnElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginBtnElement).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  test("start learning btn will render", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container)
    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 2000 }
    );
    expect(startLearningBtn).toBeInTheDocument();
  });
});
