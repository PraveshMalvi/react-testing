import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import userEvent from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("renders text correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handelers are called", async () => {
    userEvent.setup();
    const incrementHandeler = jest.fn();
    const decrementHandeler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandeler}
        handleDecrement={decrementHandeler}
      />,
    );
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementBtn = screen.getByRole("button", {
      name: "Decrement",
    });
    await userEvent.click(incrementBtn);
    await userEvent.click(decrementBtn);
    expect(incrementHandeler).toHaveBeenCalledTimes(1);
    expect(decrementHandeler).toHaveBeenCalledTimes(1);
  });
});
