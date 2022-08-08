import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Navbar from "../ui/Navbar/Navbar";

test("logo be rendered", () => {
    render(<Navbar />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).not.toHaveTextContent(/please wait/i);
  });