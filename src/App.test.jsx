import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Simple working test", () => {
  test("the title is visible", async () => {
    render(<App />);

    // Open the Tooltip
    await userEvent.click(screen.getByTestId("trigger"));

    await act(async () => { }); // Flush microtasks.

    // Tooltip is rendered
    expect(screen.getByTestId("trigger")).toBeInTheDocument();
    expect(screen.getByTestId("test")).toBeInTheDocument();

    // Close the tooltip again
    await userEvent.click(screen.getByTestId("test"));
    // console.log(container.innerHTML)

    // Expect focus to go back to the trigger
    expect(screen.getByTestId("trigger")).toHaveFocus()
  });
});
