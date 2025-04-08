import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe("Greet", () => {
    test("renders correctly", () => {
        render(<Greet />)
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
    })
    
    test("renders with name", () => {
        render(<Greet name={"Pravesh"} />)
        const textElement = screen.getByText("Hello Pravesh")
        expect(textElement).toBeInTheDocument()
    })
})