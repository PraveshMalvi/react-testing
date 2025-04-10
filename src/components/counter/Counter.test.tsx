import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from "@testing-library/user-event"

describe("Counter", () => {
    test("renders correctly", () => {
        render(<Counter />)
        const textElement = screen.getByRole("heading")
        expect(textElement).toBeInTheDocument()

        const btnElement = screen.getByRole("button", {
            name: "Increment"
        })
        expect(btnElement).toBeInTheDocument()
    })

    test("renders initial state of count", () => {
        render(<Counter />)
        const initialCount = screen.getByRole("heading")
        expect(initialCount).toHaveTextContent("0")
    })

    test("renders update state of count", async () => {
        userEvent.setup()
        render(<Counter />)
        const btnElement = screen.getByRole("button", {
            name: "Increment"
        })
        await userEvent.click(btnElement)
        
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("1")
    })

    test("renders update state of count 2", async () => {
        userEvent.setup()
        render(<Counter />)
        const btnElement = screen.getByRole("button", {
            name: "Increment"
        })
        await userEvent.dblClick(btnElement)
        
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("2")
    })

    test("renders amount input field", () => {
        render(<Counter />)
        const amountInput = screen.getByRole("spinbutton")
        expect(amountInput).toBeInTheDocument()
    })

    test("renders count 10 by setting amount on click of set btn", async () => {
        userEvent.setup()
        render(<Counter />)

        const amountInput = screen.getByRole("spinbutton")
        await userEvent.type(amountInput, "10")
        expect(amountInput).toHaveValue(10)

        const setButton = screen.getByRole("button", {
            name: "Set"
        })
        await userEvent.click(setButton)

        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("10")
    })

    test("elements are focused in the right order", async () => {
        userEvent.setup()
        render(<Counter />)
        const amountInput = screen.getByRole("spinbutton")
        const incrementBtn = screen.getByRole("button", {
            name: "Increment"
        })
        const setBtn = screen.getByRole("button", {
            name: "Set"
        })

        await userEvent.tab()
        expect(incrementBtn).toHaveFocus()

        await userEvent.tab()
        expect(amountInput).toHaveFocus()

        await userEvent.tab()
        expect(setBtn).toHaveFocus()
    })
})