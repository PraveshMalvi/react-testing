import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render initial count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));
    expect(result.current.count).toBe(0);
  });

  test("should accept and render same count", () => {
    const { result } = renderHook(useCounter, {
        initialProps: {
            initialCount: 10
        }
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment count", () => {
    const {result} = renderHook(() => useCounter({initialCount: 0}))
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test("should decrement count", () => {
    const {result} = renderHook(() => useCounter({initialCount: 0}))
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
});
